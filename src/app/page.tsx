"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
// import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import dynamic from "next/dynamic";
import ProjectCard from "@/components/ProjectCardClient";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      className="flex flex-col min-h-[100dvh] space-y-10"
      suppressHydrationWarning
    >
     {/* HERO SECTION */}
      <section id="hero" suppressHydrationWarning>
        <div className="mx-auto w-full max-w-2xl space-y-8" suppressHydrationWarning>
          <div className="gap-2 flex justify-between" suppressHydrationWarning>
            <div
              className="flex flex-col sm:flex-row flex-1 space-y-1.5 sm:space-y-0 sm:space-x-4"
              suppressHydrationWarning
            >
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                // text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                text={`Hi, I'm ${DATA.name} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text=""
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} >
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
    
    {/* ABOUT SECTION */}
      <section id="about" suppressHydrationWarning>
        <BlurFade delay={BLUR_FADE_DELAY * 3} >
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4} >
          <div suppressHydrationWarning>
            {mounted ? (
              <Markdown
                className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
                
              >
                {DATA.summary}
              </Markdown>
            ) : null}
          </div>
        </BlurFade>
      </section>
    
    {/* WORK SECTION */}
      <section id="work" suppressHydrationWarning>
        <div className="flex min-h-0 flex-col gap-y-3" suppressHydrationWarning>
          <BlurFade delay={BLUR_FADE_DELAY * 5} >
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>

          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                
              />
            </BlurFade>
          ))}
        </div>
      </section>

    {/* EDUCATION SECTION */}
      <section id="education" suppressHydrationWarning>
        <div className="flex min-h-0 flex-col gap-y-3" suppressHydrationWarning>
          <BlurFade delay={BLUR_FADE_DELAY * 7} >
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>

          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree + " - " + education.grade}
                period={`${education.start} - ${education.end}`}
                
              />
            </BlurFade>
          ))}
        </div>
      </section>

    {/* SKILLS SECTION */}
      <section id="skills" suppressHydrationWarning>
        <div className="flex min-h-0 flex-col gap-y-3" suppressHydrationWarning>
          <BlurFade delay={BLUR_FADE_DELAY * 9} >
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>

          <div className="flex flex-wrap gap-1" suppressHydrationWarning>
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                
              >
                <Badge key={skill} suppressHydrationWarning>
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

    {/* PROJECTS SECTION */}
      <section id="projects" suppressHydrationWarning>
        <div
          className="space-y-12 w-full py-12"
          suppressHydrationWarning
        >
          <BlurFade delay={BLUR_FADE_DELAY * 11} >
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              suppressHydrationWarning
            >
              <div className="space-y-2" suppressHydrationWarning>
                <div
                  className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
                  suppressHydrationWarning
                >
                  My Projects
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  suppressHydrationWarning
                >
                  Check out my latest work
                </h2>
                <p
                  className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  suppressHydrationWarning
                >
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          <div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto"
            suppressHydrationWarning
          >
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

    {/* RESEARCH SECTION */}            
<section id="research" suppressHydrationWarning>
  <div className="space-y-12 w-full py-12" suppressHydrationWarning>
    <BlurFade delay={BLUR_FADE_DELAY * 11}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center" suppressHydrationWarning>
        <div className="space-y-2" suppressHydrationWarning>
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm" suppressHydrationWarning>
            Research Paper
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" suppressHydrationWarning>
            Published Work
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" suppressHydrationWarning>
              Here is a glimpse of my academic research exploring Artificial Intelligence, Natural Language Processing, and Recruitment Technology          </p>
        </div>
      </div>
    </BlurFade>

    <div className="max-w-[800px] mx-auto space-y-6" suppressHydrationWarning>
      {DATA.research.map((paper, id) => (
        <BlurFade key={paper.title} delay={BLUR_FADE_DELAY * 12 + id * 0.1}>
          <ProjectCard
            href={paper.href}
            key={paper.title}
            title={paper.title}
            description={paper.description}
            dates={paper.dates}
            tags={paper.tags}
            image={paper.image}
            video={paper.video}
            links={paper.links}
          />
        </BlurFade>
      ))}
    </div>
  </div>
</section>

    {/* HACKATHONS SECTION */}
      {/* <section id="hackathons" suppressHydrationWarning>
        <div className="space-y-12 w-full py-12" suppressHydrationWarning>
          <BlurFade delay={BLUR_FADE_DELAY * 13} >
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              suppressHydrationWarning
            >
              <div className="space-y-2" suppressHydrationWarning>
                <div
                  className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
                  suppressHydrationWarning
                >
                  Hackathons
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  suppressHydrationWarning
                >
                  I like building things
                </h2>
                <p
                  className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  suppressHydrationWarning
                >
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 14} >
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l" >
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                    
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}

    {/* CONTACT SECTION */}
      <section id="contact" suppressHydrationWarning>
        <div
          className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12"
          suppressHydrationWarning
        >
          <BlurFade delay={BLUR_FADE_DELAY * 16}  >
            <div className="space-y-3" suppressHydrationWarning>
              <div
                className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
                suppressHydrationWarning
              >
                Contact
              </div>
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                suppressHydrationWarning
              >
                Get in Touch with Me
              </h2>
              <p
                className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                suppressHydrationWarning
              >
                Want to chat? Just shoot me a mail, {" "}
                <Link
                  href={DATA.contact.email}
                  onClick={(e) => {
                    e.preventDefault(); // prevent navigation
                    navigator.clipboard.writeText("architchoudhury10@gmail.com");
                    }}
                  className="text-blue-500 hover:underline"
                  suppressHydrationWarning
                >
                  click to copy my GMAIL ID
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
