import { HeaderInn } from '../components/HeaderInn'
import Footer from '../components/Footer'
import { ProjectCard2 } from '../components/ProjectCard'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'


export const Works = () => {
        return (
                <>
                        <HeaderInn purpose="works" />
                        <Navigation />
                        <Link to="/">
                                <div>
                                        <h2 className='heading-secondary'> GO BACK</h2>
                                </div>
                        </Link>
                        <div className='works'>

                                <div className='row' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>

                                        <ProjectCard title={"ABSOLUTE GRACE PROPERTIES"} link="https://www.absolutegraceproperties.com/" linkName="View live"> 
                                                <li>Next.JS</li>
                                                <li>Node.JS</li>
                                                <li>Typescript</li>
                                                </ProjectCard>
                                                                        {/* <ProjectCard title={"YOUTUBE CLONE"} link="https://github.com/Olabisim/youtube_clone" linkName="View github"> 
                                                                                <li>React</li>
                                                                                <li>Redux</li>
                                                                                <li>React native navigation</li>
                                                                        </ProjectCard> */}
                                                                        <ProjectCard title={"Izzytoonz Concept Limited"} link="https://izzytoonzconcepts-limited.com/" linkName="View Live" > 
                                                                                <li>Next.JS</li>
                                                                                <li>Node.JS</li>
                                                                                <li>Typescript</li>
                                                                        </ProjectCard>
                                                                        <ProjectCard title={"Lapo Dashbaord"} link="https://lapo-dashboard-eight.vercel.app/" linkName="View Live" > 
                                                                                <li>Next.JS</li>
                                                                                <li>JavaScript</li>
                                                                                <li>ShadcnUI</li>
                                                                        </ProjectCard>
                                        
                                        <ProjectCard2 title={"Aza Oil"} link="https://www.azatrailers.ng/" linkName="View live"> 
                                                <li>React</li>
                                                <li>Redux</li>
                                                <li>Nodejs</li>
                                        </ProjectCard2>
                                        <ProjectCard2 title={"Vintage"} link="https://vintageatlanticproperties.com/" linkName="View live"> 
                                                <li>React</li>
                                                <li>Nextjs</li>
                                                <li>Tailwind</li>
                                        </ProjectCard2>
                                        
                                        {/* <ProjectCard2 title={"YOUTUBE CLONE"} link="https://github.com/Olabisim/youtube_clone" linkName="View github"> 
                                                <li>React</li>
                                                <li>Redux</li>
                                                <li>React native navigation</li>
                                        </ProjectCard2> */}
                                        <ProjectCard2 title={"COVID-19"} link="https://guarded-tundra-34082.herokuapp.com/" linkName="View Live" > 
                                                <li>Sass</li>
                                                <li>Less</li>
                                                <li>Node</li>
                                        </ProjectCard2>
                                        
                                        <ProjectCard2 title={"prodhit"} link="https://prodhit.netlify.app/" linkName="View live"> 
                                                <li>React</li>
                                                <li>Metamask connection</li>
                                                <li>Tailwind</li>
                                        </ProjectCard2>
                                        <ProjectCard2 title={"BLOCK-CHAIN KITS"} link="https://mpanew.netlify.app/" linkName="View live" > 
                                                <li>React</li>
                                                <li>PINATA</li>
                                                <li>Metamask</li>
                                        </ProjectCard2>
                                        <ProjectCard2 title={"LOGIN-FRAMER-MOTION"} link="https://login-with-framer-motion.netlify.app/" linkName="View live" > 
                                                <li>react</li>
                                                <li>framer-motion</li>
                                                <li>tailwind</li>
                                        </ProjectCard2>
                                        
                                        <ProjectCard2 title={"LASU_LIBRARY"} link="https://lasu-library.netlify.app/" linkName="View LIVE" > 
                                                <li>Sass</li>
                                                <li>jquery</li>
                                                <li>svg</li>
                                        </ProjectCard2>
                                        <ProjectCard2 title={"BELLA OLONJE"} link="https://bellaolonje.netlify.app/" linkName="View Live" > 
                                                <li>Sass</li>
                                                <li>Less</li>
                                                <li>Node</li>
                                        </ProjectCard2>
                                        <ProjectCard2 title={"eko-uni-multistep"} link="https://eko-uni-multistep.netlify.app/" linkName="View LIVE"> 
                                                <li>React</li>
                                                <li>jquery</li>
                                                <li>css</li>
                                        </ProjectCard2>
                                        <ProjectCard2 title={"EKO-ANIME"} link="https://ekounianime.netlify.app/" linkName="View LIVE" > 
                                                <li>animation</li>
                                                <li>javasript</li>
                                                <li>svg</li>
                                        </ProjectCard2>
                                </div>


                        </div>
                        <Contact />
                        <div style={{marginTop: '10em'}}>
                                <Footer />
                        </div>
                </>
        )
}