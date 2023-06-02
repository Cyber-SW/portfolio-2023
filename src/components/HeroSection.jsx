import { useSpring, animated } from '@react-spring/web'

function HeroSection() {

    const props = useSpring({ 
        opacity: 1, 
        delay: 700,
        transform: 'translateX(0rem)',
        from: { 
          opacity: 0,
          transform: 'translateX(30rem)'
        } });


    return (
        <section className="hero-section">
            <animated.div style={props} className="section-container">
               <h1>Hi, I am Shawn👋</h1>
               <h2>Full-Stack Web Developer and Media Designer</h2>
            </animated.div>
        </section>
    )
}

export default HeroSection