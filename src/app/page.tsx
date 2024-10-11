import { NavigationBar } from "@/components/navbar/navigation-menu";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
// import { users } from "@/db/schema";
// import { db } from "@/db/index";


export default function Home() {
  const words: string[] = ["Body", "Health", "Well-Being"]

  return (
      <div className="bg-[url('/homebackground.png')] bg-cover">
        <div className="flex flex-col justify-center h-dvh gap-8 text-stone-300">
          <p className="font-bold text-5xl text-center">DURG = BAD</p>
          <table className="text-center justify-center w- mx-auto border separate">
            <thead>
              <tr className="font-bold text-xl">
                <th className="border-b">Your Computer</th>
                <th className="border-b">Your 
                  <FlipWords words={words} className="text-cyan-200"/>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b">Paying to install bootware/viruses</td>
                <td className="border-b">Buying and consuming drugs</td>
              </tr>
              <tr>
                <td className="border-b">Computer's processor being overworked</td>
                <td className="border-b">Memory problems, learning difficulties,<br></br>and permanent damage</td>
              </tr>
              <tr>
                <td className="border-b">Upgrading your GPU, RAM and storage</td>
                <td className="border-b">Exercise regularly, sleep enough, play sports<br></br>and stepping out of your comfort zone</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col justify-center text-center items-center">
            <p className="text-center w-1/2">Imagine paying money to damage your computer; it is something so outrageous that you probably have never thought of it before. However in the recent years, the number of youths that have been abusing drugs have steadily increased due to various circumstances. Abusing drugs does not makes you a bad person, you just need help beating your addiction.
            </p>
          </div>
        </div>
      </div>
  );
}
