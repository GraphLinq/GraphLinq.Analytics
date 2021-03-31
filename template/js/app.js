/*
    @ Copyright © 2020 www.nuixw.fr
    @ Site : webolu.net

/************ var ************/

var $win = $(window),
    $doc = $(document),
    $html = $('html'),
    $body = $('body'),
    $res = 850;


/************ if ie ************/

    function ifIE(){
        ua = navigator.userAgent;
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1 || /Edge/.test(ua);
        return is_ie;
    }

    ifIE() ? $html.addClass('ie') :!1;


/************ if mobile ************/

    function ifMobile(){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp| netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck| ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c| k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50| p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]| c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))){
            return true;
        }else{
            return false;
        }
    }

    ifMobile() ? $html.addClass('mob') :!1;


// /************ resize scroll load ************/

//     function heightPart(){
//         $winh = $win.height();
//         $('#app').outerHeight($winh);
//     }
//     $win.on('resize scroll load', function(){
//         if(ifMobile() && $res >= $win.width()){
//             $('#n').height($win.height());
//         }
//         heightPart();
//     });
    
    $('[data-link]').each(function(){
        var $t = $(this),
            $a = $t.find('a:not([data-nlink])'),
            $h = $a.attr('href'),
            $g = $a.attr('target');
        $t.on('click', function(e){
            if($g == 'blank' || $g == '_blank'){
                window.open($h, $g);
            }else{
                if($h != undefined && $h != null && $h != '#' && $h != '' && $g != '_blank' && $g != 'blank'){
                    document.location.href = $h;
                }
            }
        });
    });

/************ smooth scrollbar initialize ************/

    if(ifMobile()){
        var $damping = 0.1;
    }else{
        var $damping = 0.07;
    }


/************ Scenes ************/

    if(!ifIE()){
    
        function $afterLoad(){  

        }

        $afterLoad();

    }


/************ resize scroll load ************/

    $body.on('resize scroll load', function(){

        var o = $body.scrollTop();
        0 < o ? $body.addClass("fx") : $body.removeClass("fx");

    });


/************ select ************/
 
    $('#sl').on({
        mouseenter(){
            var $n = $('#sl').find('li').length
            var $h = $n*50
            $('#sl').height($h);
        },
        mouseleave(){
            $('#sl').height(50);
            $('#sl ul').scrollTop(0);
        }
    })


/************ nav ************/
 
    var $nav = {
        init: function(){
            var t = this;
            $('.bnv').on('click', function(){
                if($body.hasClass('onav')){
                    $body.removeClass('onav');
                }else{
                    $body.addClass('onav');
                }
            });
            $doc.on('click', function(e){
                if(!$(e.target).is('.bnv, .bnv *, #a, #a *')){
                    $body.removeClass('onav');
                }
            })
        }
    }

    $nav.init();


/************ shader ************/

"use strict";
var _createClass = (function () {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    return function (e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e;
    };
})();
function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
(function () {
    (window.App = function () {
        var e =
            (_createClass(t, [
                {
                    key: "init",
                    value: function () {
                        return (
                            (this.scene = new THREE.Scene()),
                            (this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1e4)),
                            console.log(this.camera),
                            (this.camera.position.z = 7),
                            (this.camera.position.y = 1),
                            (this.renderer = new THREE.WebGLRenderer({ width: window.innerWidth, height: window.innerHeight, scale: 1, antialias: !1, alpha: !0 })),
                            this.renderer.setSize(window.innerWidth, window.innerHeight),
                            (this.container = document.createElement("div")),
                            (this.container.id = "canvasGL"),
                            this.container.appendChild(this.renderer.domElement),
                            this.camera.lookAt(new THREE.Vector3()),
                            document.getElementById("xx").appendChild(this.container),
                            (this.terrain = new Terrain(this.scene)),
                            this.scene.add(this.terrain.plane_mesh),
                            this.update()
                        );
                    },
                },
                {
                    key: "update",
                    value: function () {
                        return requestAnimationFrame(this.update), this.terrain.update(), this.renderScene();
                    },
                },
                {
                    key: "renderScene",
                    value: function () {
                        return this.renderer.render(this.scene, this.camera);
                    },
                },
                {
                    key: "resize",
                    value: function (e, t) {
                        return (this.camera.aspect = e / t), this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
                    },
                },
            ]),
            t);
        function t() {
            _classCallCheck(this, t), (this.init = this.init.bind(this)), (this.update = this.update.bind(this)), (this.renderScene = this.renderScene.bind(this)), (this.resize = this.resize.bind(this));
        }
        return (
            (e.prototype.canvasGL = null),
            (e.prototype.container = null),
            (e.prototype.scene = null),
            (e.prototype.camera = null),
            (e.prototype.renderer = null),
            (e.prototype.geometry = null),
            (e.prototype.material = null),
            (e.prototype.mesh = null),
            (e.prototype.gui = null),
            (e.prototype.terrain = null),
            (e.prototype.composer = null),
            (e.prototype.render_pass = null),
            (e.prototype.fxaa_pass = null),
            (e.prototype.posteffect = !1),
            (e.prototype.meteo = null),
            (e.prototype.skybox = null),
            e
        );
    }.call(this)),
        (window.Terrain = function () {
            var e =
                (_createClass(t, [
                    {
                        key: "init",
                        value: function () {
                            return (
                                (this.uniforms = {
                                    time: { type: "f", value: 0 },
                                    speed: { type: "f", value: this.options.speed },
                                    elevation: { type: "f", value: this.options.elevation },
                                    noise_range: { type: "f", value: this.options.noise_range },
                                    offset: { type: "f", value: this.options.elevation },
                                    perlin_passes: { type: "f", value: this.options.perlin_passes },
                                    sombrero_amplitude: { type: "f", value: this.options.sombrero_amplitude },
                                    sombrero_frequency: { type: "f", value: this.options.sombrero_frequency },
                                    line_color: { type: "c", value: new THREE.Color(this.options.wireframe_color) },
                                }),
                                this.buildPlanes(this.options.segments),
                                this.initGUI()
                            );
                        },
                    },
                    { key: "initGUI", value: function () {} },
                    {
                        key: "buildPlanes",
                        value: function (e) {
                            return (
                                (this.plane_geometry = new THREE.PlaneBufferGeometry(20, 20, e, e)),
                                (this.plane_material = new THREE.ShaderMaterial({
                                    vertexShader: document.getElementById("shader-vertex-terrain-perlinsombrero").textContent,
                                    fragmentShader: document.getElementById("shader-fragment-terrain").textContent,
                                    wireframe: this.options.wireframe,
                                    wireframeLinewidth: 1,
                                    transparent: !0,
                                    uniforms: this.uniforms,
                                })),
                                (this.groundMaterial = new THREE.MeshPhongMaterial({ ambient: 267386880, color: 16711680, specular: 328965, opacity: 0 })),
                                this.groundMaterial.color.setHSL(1, 5, 200),
                                (this.materials = [this.groundMaterial, this.plane_material]),
                                (this.plane_mesh = THREE.SceneUtils.createMultiMaterialObject(this.plane_geometry, this.materials)),
                                (this.plane_mesh.rotation.x = -Math.PI / 2),
                                (this.plane_mesh.position.y = -0.5)
                            );
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            return (this.plane_material.uniforms.time.value = this.clock.getElapsedTime());
                        },
                    },
                ]),
                t);
            function t(e) {
                _classCallCheck(this, t), (this.init = this.init.bind(this)), (this.initGUI = this.initGUI.bind(this)), (this.buildPlanes = this.buildPlanes.bind(this)), (this.update = this.update.bind(this)), (this.scene = e), this.init();
            }
            return (
                (e.prototype.uniforms = null),
                (e.prototype.plane_mesh = null),
                (e.prototype.plane_geometry = null),
                (e.prototype.groundMaterial = null),
                (e.prototype.clock = new THREE.Clock(!0)),
                (e.prototype.options = { 
                    elevation: 1, 
                    noise_range: 1, 
                    sombrero_amplitude: 0.6, 
                    sombrero_frequency: 10, 
                    speed: 0.3, 
                    segments: 200, 
                    wireframe_color: "#f20350", 
                    perlin_passes: 1, 
                    wireframe: !0, 
                    floor_visible: !0 
                }),
                (e.prototype.scene = null),
                e
            );
        }.call(this)),
        new window.App().init();
}.call(void 0));