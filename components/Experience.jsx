import { workExperience } from "@/data"
import { Button } from "./ui/MovingBorder"


const Experience = () => {
  return (
    <div className="mt-20">
      <h1 className="heading">
        I miei <span className="text-purple">Studi</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((exp) => (
            <Button
                key={exp.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <img src={exp.thumbnail} alt={exp.thumbnail} className="lg:w-32 md:w-20 w-16" />
                    <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">{exp.title}</h1>
                        <p className="text-start text-white-100 mt-3 text-semibold">{exp.desc}</p>
                    </div>
                </div>
            </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience