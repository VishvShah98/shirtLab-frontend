import { proxy } from 'valtio';
import logo from '../assets/threejs.png'

const state = proxy({
  intro: true,
  color: 'orange',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: logo,
  fullDecal: logo,
  targetPosition: [0, 0, 0]
});

export default state;