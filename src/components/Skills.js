import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import Matter from 'matter-js';

const skillsList = [
  'React.Js', 'Next.Js', 'Node.Js', 'Express.Js', 'Typescript', 'HTML', 'CSS', 'Python', 'C++', 'MySQL', 'MongoDB', 'Kotlin', 'React Native', 'Amazon Web Services', 'Git', 'REST API', 'UI/UX Designing', 'Docker', 'Kubernetes', 'Firebase', 'Figma', 'Tailwind CSS'
];

const PADDING = 18;

function getResponsiveSizes(width) {
  if (width < 600) {
    return {
      skillHeight: 24,
      fontSize: 10,
      border: '1px solid #35A29F',
      borderRadius: '999px',
      boxPadding: '2px 12px',
    };
  }
  if (width < 900) {
    return {
      skillHeight: 32,
      fontSize: 14,
      border: '2px solid #35A29F',
      borderRadius: '999px',
      boxPadding: '4px 20px',
    };
  }
  return {
    skillHeight: 48,
    fontSize: 20,
    border: '3px solid #35A29F',
    borderRadius: '999px',
    boxPadding: '8px 36px',
  };
}

function getSkillWidths(skills, sizes) {
  return skills.map(skill => {
    const temp = document.createElement('span');
    temp.style.fontSize = sizes.fontSize + 'px';
    temp.style.fontWeight = 600;
    temp.style.padding = sizes.boxPadding;
    temp.style.position = 'absolute';
    temp.style.visibility = 'hidden';
    temp.innerText = skill;
    document.body.appendChild(temp);
    const skillWidth = temp.offsetWidth;
    document.body.removeChild(temp);
    return skillWidth;
  });
}

const Skills = () => {
  const sceneRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [containerSize, setContainerSize] = useState({ width: 1100, height: 600 });
  const [sizes, setSizes] = useState(getResponsiveSizes(window.innerWidth));
  const [skillWidths, setSkillWidths] = useState(getSkillWidths(skillsList, getResponsiveSizes(window.innerWidth)));
  const engineRef = useRef(null);
  const setTick = useState(0)[1];
  const skillBodiesRef = useRef([]);
  const mouseConstraintRef = useRef(null);

  useEffect(() => {
    function updateSize() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const width = Math.max(Math.min(vw * 0.95, 1100), 320);
      const height = Math.max(Math.min(vw * 0.60, 600), 220);
      const newSizes = getResponsiveSizes(vw);
      setContainerSize({ width, height });
      setSizes(newSizes);
      setSkillWidths(getSkillWidths(skillsList, newSizes));
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (!containerSize.width || !containerSize.height || skillWidths.length === 0) return;
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;
    world.gravity.y = 0;
    const { width: OUTER_WIDTH, height: OUTER_HEIGHT } = containerSize;
    const BOX_WIDTH = OUTER_WIDTH - 2 * PADDING;
    const BOX_HEIGHT = OUTER_HEIGHT - 2 * PADDING;
    const ground = Matter.Bodies.rectangle(OUTER_WIDTH/2, OUTER_HEIGHT - PADDING, BOX_WIDTH, 40, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(PADDING, OUTER_HEIGHT/2, 40, BOX_HEIGHT, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(OUTER_WIDTH - PADDING, OUTER_HEIGHT/2, 40, BOX_HEIGHT, { isStatic: true });
    const ceiling = Matter.Bodies.rectangle(OUTER_WIDTH/2, PADDING, BOX_WIDTH, 40, { isStatic: true });
    Matter.World.add(world, [ground, leftWall, rightWall, ceiling]);
    const skillBodies = skillsList.map((skill, i) => {
      const skillWidth = skillWidths[i];
      const x = Math.random() * (OUTER_WIDTH - skillWidth - 2 * PADDING) + skillWidth / 2 + PADDING;
      const y = PADDING + 20 + Math.random() * 30;
      return Matter.Bodies.rectangle(x, y, skillWidth, sizes.skillHeight, {
        restitution: 0.5,
        friction: 0.2,
        label: skill,
      });
    });
    const remPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const circleRadius = 3 * remPx; // 5rem in px
    function getRandomCirclePosition() {
      const minX = PADDING + circleRadius;
      const maxX = OUTER_WIDTH - PADDING - circleRadius;
      const minY = PADDING + circleRadius;
      const maxY = OUTER_HEIGHT - PADDING - circleRadius;
      return {
        x: Math.random() * (maxX - minX) + minX,
        y: Math.random() * (maxY - minY) + minY,
      };
    }
    const pos1 = getRandomCirclePosition();
    const pos2 = getRandomCirclePosition();
    const circleBodies = [
      Matter.Bodies.circle(pos1.x, pos1.y, circleRadius, {
        restitution: 0.7,
        friction: 0.1,
        render: { fillStyle: '#FF1E56' },
        label: 'circle-1',
        customType: 'circle',
        customColor: '#FF1E56',
        customRadius: circleRadius,
      }),
      Matter.Bodies.circle(pos2.x, pos2.y, circleRadius, {
        restitution: 0.7,
        friction: 0.1,
        render: { fillStyle: '#FFD700' },
        label: 'circle-2',
        customType: 'circle',
        customColor: '#FFD700',
        customRadius: circleRadius,
      })
    ];
    Matter.World.add(world, [...skillBodies, ...circleBodies]);
    skillBodiesRef.current = [...skillBodies, ...circleBodies];
    const update = () => {
      setPositions(skillBodiesRef.current.map((b, i) => ({
        x: b.position.x,
        y: b.position.y,
        angle: b.angle,
        width: b.customType === 'circle' ? b.circleRadius * 2 : skillWidths[i],
        customType: b.customType,
        customColor: b.customColor,
        customRadius: b.customRadius,
        label: b.label,
      })));
      setTick(t => t + 1);
    };
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    const interval = setInterval(update, 1000/60);
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
      filter: {
        body: (body) => skillBodiesRef.current.includes(body)
      }
    });
    mouseConstraintRef.current = mouseConstraint;
    Matter.World.add(world, mouseConstraint);
    sceneRef.current.addEventListener('mousewheel', e => e.preventDefault());
    const gravityTimer = setTimeout(() => {
      world.gravity.y = 1.2;
    }, 2000);
    function handleMouseMove(e) {
      if (!mouseConstraint.body) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > containerSize.width || y > containerSize.height) {
        mouseConstraint.body = null;
        mouseConstraint.constraint.bodyB = null;
        mouseConstraint.constraint.pointB = { x: 0, y: 0 };
        mouseConstraint.constraint.angleB = 0;
        mouseConstraint.mouse.button = -1;
      }
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      clearInterval(interval);
      clearTimeout(gravityTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerSize, sizes, skillWidths, setTick]);

  return (
    <div
      className='skillbox physics-skillbox skills-physics-container'
      ref={sceneRef}
      style={{
        '--skills-container-width': `${containerSize.width}px`,
        '--skills-container-height': `${containerSize.height}px`,
      }}
    >
      <div className="skills-categories-banner">
        WEB DEVELOPMENT | ANDROID DEVELOPMENT | DEVOPS & CLOUD | PROGRAMMING LANGUAGES
      </div>
      <div className="skills-scroll-notice">
        Website won't scroll inside this area
      </div>
      {positions.map((position, i) => (
        <div
          key={i}
          className={'skillbar physics-skillbar' + (position.customType === 'circle' ? ' circle-no-border' : '')}
          style={{
            position: 'absolute',
            left: position.x - (position.width/2),
            top: position.y - (sizes.skillHeight/2),
            width: position.customType === 'circle' ? position.customRadius * 2 : position.width,
            height: position.customType === 'circle' ? position.customRadius * 2 : sizes.skillHeight,
            transform: position.angle ? `rotate(${position.angle}rad)` : undefined,
            zIndex: 2,
            '--skillbar-font-size': `${sizes.fontSize}px`,
            '--skillbar-padding': position.customType === 'circle' ? 0 : sizes.boxPadding,
            '--skillbar-border': position.customType === 'circle' ? 'none' : sizes.border,
            '--skillbar-radius': position.customType === 'circle' ? '50%' : sizes.borderRadius,
            background: position.customType === 'circle' ? position.customColor : undefined,
            borderRadius: position.customType === 'circle' ? '50%' : undefined,
            color: position.customType === 'circle' ? 'transparent' : undefined,
            padding: position.customType === 'circle' ? 0 : undefined,
            margin: position.customType === 'circle' ? 0 : undefined,
          }}
        >
          {position.customType === 'circle' ? '' : position.label}
        </div>
      ))}
    </div>
  );
};

export default Skills;