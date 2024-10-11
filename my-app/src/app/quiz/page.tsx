import QuizSelector from '@/components/QuizSelector';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 dark:from-slate-600 dark:via-slate-800 dark:to-slate-950 p-8">
    <main className="pt-8 px-6 md:px-16 lg:px-36 lg:grid lg:grid-cols-2">
      <div className="mb-10 md:mb-16">
        <p className="text-[2.5rem] md:text-[4rem] font-light leading-10 md:leading-[100%]">
          Welcome to the
        </p>
        <h1 className="text-[2.5rem] md:text-[4rem] font-medium leading-10 md:leading-[100%]">
          Druggy Quiz!
        </h1>
        <p className="italic text-sm md:text-xl font-normal text-slate-500 dark:text-slate-300 mt-4 leading-5">
          Pick a subject to get started.
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-3 md:gap-6">
          <QuizSelector
            quizLink="/quiz/drug-classification"
            imgSrc='/drug1.png'
            quizText="Drug Classification"
          />
          <QuizSelector 
            quizLink="/quiz/drug-effects" 
            imgSrc='/drug2.png' 
            quizText="Drug Effects" />
          <QuizSelector
            quizLink="/quiz/drug-prevention"
            imgSrc='/drug3.png'
            quizText="Drug Prevention"
          />
          <QuizSelector
            quizLink="/quiz/drug-policy"
            imgSrc='/drug4.png'
            quizText="Drug Policy"
          />
        </ul>
      </div>
    </main>
    </div>
  );
}






















// "use client"

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast";

// const FormSchema = z.object({
//  name: z.string({
//      required_error: "Please enter a name"
//  }).min(2, {
//      message: "name must be more than 2 characters long"
//  }).max(20, {
//      message: "name must be no longer than 20 characters"
//  }),
//  question1: z.string({
//      required_error: "Please select an option"
//  })
// })

// export default function Quiz() {
//  const { toast } = useToast();

//  const form = useForm<z.infer<typeof FormSchema>>({
//      resolver: zodResolver(FormSchema)
//  })

//  function onSubmit(data: z.infer<typeof FormSchema>) {
//     if (data.question1 === "yes") {
//         toast({
//             title: `Congratulations ${data.name}`,
//             description: "You are a drug dealer",
//         })
//     } else {
//         toast({
//             title: `Thank you ${data.name}`,
//             description: "Unfortunately you are not a drug dealer",
//         })
//     }
//     // await db.insert(users).values({name: data.name, isDrugDealer: data.question1})
//   }

//  return (
//      <Form {...form}>
//          <form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
//              <FormField
//                  control={form.control}
//                  name="name"
//                  render={({ field }) => (
//                      <FormItem>
//                          <FormLabel>Question 1:</FormLabel>
//                          <FormDescription>What is your name?</FormDescription>
//                              <FormControl>
//                                  <Input placeholder="your name here" {...field}/>
//                              </FormControl>
//                          <FormMessage/>
//                      </FormItem>
//                  )}
//              />
//              <FormField
//                  control={form.control}
//                  name="question1"
//                  render={({ field }) => (
//                      <FormItem>
//                          <FormLabel>Question 2:</FormLabel>
//                          <FormDescription>Do you sell drugs?</FormDescription>
//                          <Select onValueChange={field.onChange} defaultValue={field.value}>
//                              <FormControl>
//                                  <SelectTrigger>
//                                      <SelectValue placeholder="Please select an answer"/>
//                                  </SelectTrigger>
//                              </FormControl>
//                              <SelectContent>
//                                  <SelectItem value="yes">Yes</SelectItem>
//                                  <SelectItem value="no">No</SelectItem>
//                              </SelectContent>
//                          </Select>
//                          <FormMessage/>
//                      </FormItem>
//                  )}
//              />
//              <Button type="submit">Submit</Button>
//          </form>
//      </Form>
//  )
// }