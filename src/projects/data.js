import concrete from "../assets/concrete.png";
import cognify from "../assets/cognify.png";
import foresty from "../assets/foresty.png";
import aaargh from "../assets/img4.mp4";
import finance from "../assets/finance.png";
import roshni from "../assets/roshni.png";
import knowabout from "../assets/knowabout.png";
import colorizer from "../assets/colorizer.png";
import holostry from "../assets/holostry.mp4";
import payback from "../assets/payback.png";
import sentiment from "../assets/sentiment.png";
import spree from "../assets/spree.png";
import dad from "../assets/dad.png";
import calculator from "../assets/calculator.png";
import bank from "../assets/bank.png";
import dice from "../assets/dice.png";

const data = [
    {
      name: `Concrete Damage Detector`,
      desc: `Implemented a Deep Learning model using YOLO-v8 which can detect and segment damages on concrete surfaces in real-time and help maintain strength and integrity of buildings. The model is trained on a custom dataset made using Roboflow.`,
      link: `https://github.com/MaybeTarun/Concrete-Damage-Detector`,
      skills: [`Python`, `YoloV8`],
      image: concrete
    },
    {
      name: `Aaargh!`,
      desc: `Game inspired by Flappy Bird. The player is controlled by making weird noises like "aaaah" or "aargh".`,
      link: `https://www.maybetarun.in/projects/aaargh`,
      skills: [`React`],
      image: aaargh
    },
    {
      name: `Cognify`,
      desc: `Developed a cloud based learning platform using Kotlin and XML that automates learning methods making it easy for the user to learn and understand things. It uses OpenAI as its AI model.`,
      link: `https://github.com/MaybeTarun/Cognify`,
      skills: [`Kotlin`, `XML`],
      image: cognify
    },
    {
      name: `Foresty`,
      desc: `Created a user-friendly platform that helps users in finding vulnerabilities (such as open ports) in their websites which anyone could have used to hack them. It uses a shell script which automates the process of vulnerability assessment.`,
      link: `https://github.com/MaybeTarun/Foresty`,
      skills: [`HTML`, `CSS`, `Javascript`, `Shell`],
      image: foresty
    },
    {
      name: `Roshni Sinks`,
      desc: `An E-Commerce platform for a manufacturing business "Roshni". Still under development`,
      link: `https://roshnisinks.vercel.app/`,
      skills: [`React`],
      image: roshni
    },
    {
      name: `Finance Tracker`,
      desc: `An MERN stack application for tracking personal finances. Uses Clerk for user management`,
      link: `https://financetracker-neon.vercel.app/`,
      skills: [`React`, `MongoDB`],
      image: finance
    },
    {
      name: `Know-About`,
      desc: `Built an NPM Package that gives you info about people when you run the command "npx know-about [name]". Currently consists of only 2-3 people's info but I plan to add more, so if you want to add yours too just dm me on twitter ;)`,
      link: `https://www.npmjs.com/package/know-about`,
      skills: [`Node`],
      image: knowabout
    },
    {
      name: `Image Colorizer`,
      desc: `This website is a photo colorizer. You can upload your black and white photos and it uses a machine learning model, created by Rich Zhang, to colorize the images for you!`,
      link: `https://github.com/MaybeTarun/ImageColorizer`,
      skills: [`Flask`, `HTML`],
      image: colorizer
    },
    {
      name: `Holostry`,
      desc: `Developed this project for a 24hr Hackathon - MOZOHACK with my friends. It consists of 3D holographic model of carbon compounds which students can use to visualize the compounds in 3 dimensions making it easier for them to understand.`,
      link: `https://github.com/MaybeTarun/Holostry`,
      skills: [`Dart`, `Blender`],
      image: holostry
    },
    {
      name: `Payback-to-ya`,
      desc: `Created an NPM package which you can add to your website if your client doesn't pay you on time. It will slowly make the website disappear in 7 days and the client will be in ShIk sHaK ShOk.`,
      link: `https://www.npmjs.com/package/payback-to-ya`,
      skills: [`Node`],
      image: payback
    },
    {
      name: `Sentiment Analyzer`,
      desc: `It is a Python application that utilizes the Boto3 library to interact with Amazon Comprehend's sentiment analysis service. The application is built with a graphical user interface (GUI) created using the Tkinter library.`,
      link: `https://github.com/MaybeTarun/SentimentAnalyzer`,
      skills: [`Boto3`, `Tkinter`, `AWS Comprehend`],
      image: sentiment
    },
    {
      name: `Spree`,
      desc: `Just a movie streaming website that uses OMDb API.`,
      link: `https://github.com/MaybeTarun/Spree`,
      skills: [`HTML`, `CSS`, `Javascript`],
      image: spree
    },
    {
      name: `Dad Jokes`,
      desc: `Built a chrome extension that displays random dad jokes whenever used. It uses an API called icanhazdadjoke. You can check it out by turning on developer mode in chrome extensions and loading my extension.`,
      link: `https://github.com/MaybeTarun/DadJokes-ChromeExt`,
      skills: [`HTML`, `CSS`, `Javascript`],
      image: dad
    },
    {
      name: `Aint a Calculator`,
      desc: `I honestly don't know why I built this. But whats done is done. It is a calculator which only works when you switch its lever on (you have to solve a random math question in order to switch it on). It also displays some math puns (coz why not).`,
      link: `https://maybetarun.github.io/AintACalculator.github.io/`,
      skills: [`HTML`, `CSS`, `Javascript`],
      image: calculator
    },
    {
      name: `Bank Management System`,
      desc: `Built a very basic bank management system using python and mysql for a school project. It's one of my first school projects.`,
      link: `https://github.com/MaybeTarun/Bank-Management-Project`,
      skills: [`Numpy`, `Pandas`, `MySQL`],
      image: bank
    },
    {
      name: `Dice Simulator`,
      desc: `A very normal dice simulator built with Python. Also one of my very old school project.`,
      link: `https://github.com/MaybeTarun/Dice-Simulator`,
      skills: [`Tkinter`],
      image: dice
    }
  ];
  
  export default data;
  