'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coffee, Code, Bike, Book, Music, Camera, Plane, Utensils } from "lucide-react"
import Image from "next/image"

export default function FunAboutMeGallery() {
  const funFacts = [
    { icon: <Coffee className="w-4 h-4 mr-2" />, text: "I somehow managed to burn soup once" },
    { icon: <Code className="w-4 h-4 mr-2" />, text: "I start coding 2 years ago" },
    { icon: <Bike className="w-4 h-4 mr-2" />, text: "I can ride a bicycle" },
    { icon: <Book className="w-4 h-4 mr-2" />, text: "I love One Piece" },
    { icon: <Music className="w-4 h-4 mr-2" />, text: "I stan NewJeans" },
  ]

  const galleryImages = [
    { src: "/a1.png?height=300&width=300", alt: "Coding setup", title: "Waterfalls!!!" },
    { src: "/a2.png?height=300&width=300", alt: "Travel photo",  title: "Idk if giving strangers my phone was the brightest idea" },
    { src: "/a3.png?height=300&width=300", alt: "Coffee and laptop",  title: "I don't even have Kakao" },
    { src: "/a4.png?height=300&width=300", alt: "Hobby photo",  title: "My first baseball match!" },
    { src: "/a5.png?height=300&width=300", alt: "Favorite dish",  title: "Diving with the bois" },
    { src: "/a6.png?height=300&width=300", alt: "Nature shot",  title: "real" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 dark:from-slate-600 dark:via-slate-800 dark:to-slate-950 p-8">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src="/profilepicture.png?height=128&width=128" alt="Jane Doe" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2">Joshua "Big Back" Lim</h1>
        <p className="text-xl">Tired and hungry</p>
      </motion.header>

      <main className="max-w-4xl mx-auto">
        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="skills">Hobbies</TabsTrigger>
            <TabsTrigger value="funfacts">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>Academic Victim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  👋 Hey there! I'm Joshua, was a full-stack developer hopeful but then I realised over the past 5 days that it's damn shag. 
                  I like problem solving but this is too much......
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Climbing', 'Fishing', 'Photography', 'Self-Deprecation', 'Skating', 'Hiking', 'Diving', 'hehe-haha-ing', 'Board Games', 'Hosting Gatherings'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Badge variant="secondary" className="text-lg py-2 px-4">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="funfacts">
            <Card>
              <CardHeader>
                <CardTitle>Totally True Facts About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {funFacts.map((fact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-lg"
                    >
                      {fact.icon}
                      {fact.text}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>A Glimpse into My World</CardTitle>
              <CardDescription>
                They say a picture is worth a thousand lines of code... or something like that.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="rounded-lg object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="text-white text-center">
                        <p className="mt-2 font-semibold">{image.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  )
}





// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import Image from "next/image"
// import newjeans from "@/app/assests/newjeans.png"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Terminal } from "lucide-react"

// export default function AboutMe() {
//     return(
//         <div className="p-5">
//             Hello mentee
//             <Card>
//                 <CardHeader>
//                     <CardTitle>
//                         Hello I'm Joshua
//                     </CardTitle>
//                     <CardDescription>
//                         I like to code and climb
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <Image alt="hello" src={newjeans}/>
//                 </CardContent>
//             </Card>
//             <Card>
//                 <CardHeader>
//                     <CardContent>
//                         Major: 
//                     </CardContent>
//                     <CardDescription>
//                         Information Systems
//                     </CardDescription>
//                 </CardHeader>
//             </Card>
//             <Alert>
//                 <Terminal className="h-4 w-4"/>
//                 <AlertTitle>Heads up</AlertTitle>
//                 <AlertDescription>I have added an alert</AlertDescription>
//             </Alert>
//         </div>
//     );
//   }
  