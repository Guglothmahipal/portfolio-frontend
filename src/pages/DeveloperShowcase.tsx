import { useEffect, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import type { IParallax } from '@react-spring/parallax'

// ===== DEVOPS IMAGES =====
import aws from '../assets/devops/aws.svg'
import docker from '../assets/devops/docker.svg'
import kubernetes from '../assets/devops/kubernetes.svg'
import cicd from '../assets/devops/cicd.svg' // GitHub
import terraform from '../assets/devops/terraform.svg'
import jenkins from '../assets/devops/jenkins.svg'
import grafana from '../assets/devops/grafana.svg'
import nginx from '../assets/devops/nginx.svg'
import linux from '../assets/devops/linux.svg'
import prometheus from '../assets/devops/prometheus.svg'

export default function DevopsParallax() {
  const parallax = useRef<IParallax>(null!)

  // ===== AUTO SCROLL =====
  useEffect(() => {
    let page = 0
    const interval = setInterval(() => {
      page = (page + 1) % 3
      parallax.current?.scrollTo(page)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
  style={{
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none', // disables user scrolling
  }}
>

      <Parallax
  ref={parallax}
  pages={3}
  style={{
    height: '100%',
  }}
>


        {/* ===== PAGE BACKGROUNDS ===== */}
        <ParallaxLayer offset={0} speed={0} style={{ background: '#ffffff' }} />
        <ParallaxLayer offset={1} speed={0} style={{ background: '#e9b11aff' }} />
        <ParallaxLayer offset={2} speed={0} style={{ background: '#87BCDE' }} />

        {/* ===== STAR / DOT CLOUD EFFECT (ALL PAGES) ===== */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={starBackground}
        />

        {/* ================= PAGE 0 : CLOUD & CORE ================= */}
        <ParallaxLayer offset={0} speed={0.3} >
          <img src={aws} style={icon(220)} />
          <img src={linux} style={icon(120, '40%', '70%')} />
          <img src={cicd} style={icon(110, '65%', '30%')} />
          
        </ParallaxLayer>

        {/* ================= PAGE 1 : CONTAINERS ================= */}
        <ParallaxLayer offset={1} speed={0.3} >
          <img src={docker} style={icon(200)} />
          <img src={kubernetes} style={icon(180, '35%', '65%')} />
          <img src={terraform} style={icon(130, '70%', '30%')} />
        </ParallaxLayer>

        {/* ================= PAGE 2 : CI / CD & OBS ================= */}
        <ParallaxLayer offset={2} speed={0.3} >
          <img src={jenkins} style={icon(140, '35%', '30%')} />
          <img src={grafana} style={icon(140, '65%', '65%')} />
          <img src={prometheus} style={icon(130, '50%', '80%')} />
          <img src={nginx}style={icon(160)}  />
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

/* ================= STYLES ================= */
function icon(
  size: number,
  left: string = '50%',
  top: string = '50%'
): React.CSSProperties {
  return {
    width: size,
    maxWidth: size,
    position: 'absolute',
    left,
    top,
    transform: 'translate(-50%, -50%)',
    opacity: 0.95,
  }
}

/* ===== STAR-LIKE CLOUD DOT BACKGROUND ===== */
const starBackground: React.CSSProperties = {
  backgroundImage: `
    radial-gradient(circle at 20% 30%, rgba(180,200,255,0.35) 1px, transparent 2px),
    radial-gradient(circle at 70% 60%, rgba(180,200,255,0.3) 1px, transparent 2px),
    radial-gradient(circle at 40% 80%, rgba(180,200,255,0.25) 1px, transparent 2px),
    radial-gradient(circle at 85% 20%, rgba(180,200,255,0.35) 1px, transparent 2px)
  `,
  backgroundSize: '220px 220px',
  opacity: 0.5,
}
