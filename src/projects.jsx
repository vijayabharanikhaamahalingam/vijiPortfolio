import React from 'react'
import Card from './Card';
import restaurant from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import chess from"./images/chess.jpg"
import snake from "./images/snake.jpg"
import wise_way from"./images/wise_way.jpg"
import Music from"./images/photo-1470225620780-dba8ba36b745.jpeg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: Music,
          altText: 'Music website',
          title: 'Music Website',
          description: 'A dynamic and responsive restaurant website showcasing menu, online music, customer listen songs, and like songs.',
          explore:"https://github.com/vijayabharanikhaamahalingam/music-app-frontend.git",
          website:"https://music-app-frontend.netlify.app"
        },
        
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
          website={card.website}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
