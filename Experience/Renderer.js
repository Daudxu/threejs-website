import * as THREE from 'three'
import Experience from "./Experience";

export default class Renderer {
    constructor(){
         this.experience = new Experience();
 
         this.sizes = this.experience.sizes;
         this.scene = this.experience.scene;
         this.canvas = this.experience.canvas;
         this.camera = this.experience.camera;

         this.setRenderer();
    }
    setRenderer() {
        this.renderer = new THREE.WebGL1Renderer({
            canvas: this.canvas,
            antialias: true
        })
        this.renderer.physicallyCorrectLights = true
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        // 启用阴影
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        // 渲染尺寸
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        // 渲染设备像素比
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
    }
    // 调整大小
    resize(){
       // 渲染尺寸
       this.renderer.setSize(this.sizes.width, this.sizes.height);
       // 渲染设备像素比
       this.renderer.setPixelRatio(this.sizes.pixelRatio)
    }
    // 更新渲染
    update(){
        //渲染
        this.renderer.render(this.scene, this.camera.perspectiveCamera)
        this.renderer.render(this.scene, this.camera.orthographicCamera)
    }



}