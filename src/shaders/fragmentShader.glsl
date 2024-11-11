// shaders/fragmentShader.glsl
uniform float uTime;
uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  // Create a simple distortion based on time and uv coordinates
  uv.y += sin(uv.x * 10.0 + uTime) * 0.05;
  uv.x += cos(uv.y * 10.0 + uTime) * 0.05;

  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
