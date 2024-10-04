"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const  Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">Il mio <span className="text-purple">approccio</span></h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        
        <Card title="Comprendere & Pianificare" icon={<AnimatedNumberIcon number={1} />} des="Analizzo attentamente le esigenze del progetto per elaborare una strategia solida e personalizzata. La pianificazione è fondamentale per ottenere risultati ottimali e creare un flusso di lavoro efficace."
>
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
        
        <Card title="Sviluppare & Collaborare" icon={<AnimatedNumberIcon number={2} />} des="Sviluppo soluzioni con un approccio collaborativo, mantenendo una comunicazione aperta con il team e i clienti. Credo che il lavoro di squadra porti a prodotti finali più completi e di alta qualità."
>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        
        <Card title="Testare & Ottimizzare" icon={<AnimatedNumberIcon number={3} />} des="Effettuo test approfonditi per assicurare che il prodotto sia robusto e performante. L'ottimizzazione continua è la chiave per mantenere alti standard di qualità e garantire un'esperienza utente impeccabile.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        
      </div>
    </section>
  );
}

const Card = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative min-h-[20rem] lg:h-[35rem] rounded-3xl "
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
      
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    </div>
  );
};

const AnimatedNumberIcon = ({ number }) => {
  const randomDuration = Math.random() * 10 + 5 + 's';

  return (
    <div className="relative flex items-center justify-center w-40 h-40 rounded-full overflow-hidden">
      {/* Rotating background */}
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          background: 'linear-gradient(to right, white, mediumpurple)',
          animation: `rotate ${randomDuration} infinite linear`,
        }}
      >
        {/* Magic border animation */}
        <span
          className="absolute inset-0"
          style={{
            background: 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
          }}
        ></span>
      </div>

      {/* Quarter borders */}
      <div className="absolute w-[95%] h-[95%] rounded-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-[49%] h-[49%] border-t-[9px] border-l-[9px] border-black rounded-tl-full"></div>
        <div className="absolute top-0 right-0 w-[49%] h-[49%] border-t-[9px] border-r-[9px] border-black rounded-tr-full"></div>
        <div className="absolute bottom-0 left-0 w-[49%] h-[49%] border-b-[9px] border-l-[9px] border-black rounded-bl-full"></div>
        <div className="absolute bottom-0 right-0 w-[49%] h-[49%] border-b-[9px] border-r-[9px] border-black rounded-br-full"></div>
      </div>

      {/* Inner circle quarters */}
      <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 w-[calc(50%-1.5px)] h-[calc(50%-1.5px)] bg-black rounded-tl-full"></div>
        <div className="absolute top-0 right-0 w-[calc(50%-1.5px)] h-[calc(50%-1.5px)] bg-black rounded-tr-full"></div>
        <div className="absolute bottom-0 left-0 w-[calc(50%-1.5px)] h-[calc(50%-1.5px)] bg-black rounded-bl-full"></div>
        <div className="absolute bottom-0 right-0 w-[calc(50%-1.5px)] h-[calc(50%-1.5px)] bg-black rounded-br-full"></div>
      </div>

      {/* Number */}
      <div
        className={`absolute z-10 text-7xl font-extrabold flex items-center justify-center ${
          number === 1 ? 'transform -translate-x-[5px]' : ''
        }`}
      >
        {number}
      </div>
    </div>
  );
};




export const Icon = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export default Approach;
