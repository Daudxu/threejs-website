import * as THREE from 'three'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'

import Camera  from './Camera'
import Renderer  from './Renderer'

import World from './World/World'

export default class Experience {
    constructor(canvas){
        if (Experience.instance) {
            return Experience.instance
        }
        Experience.instance = this
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.Renderer = new Renderer();
        this.World = new World();
        
        this.time.on("resize", ()=>{
            this.resize();
        })

        this.time.on("update", ()=>{
            this.update();
        })
    }

    resize() {
        this.camera.resize()
        this.Renderer.resize()
    }

    update() {
        this.camera.update()
        this.Renderer.update()
    }


}