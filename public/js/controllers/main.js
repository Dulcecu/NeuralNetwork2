$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 2,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3df0ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 160,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 20,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 10,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 2
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }
    );

});
'use strict';

/**
 * @ngdoc function
 * @name gitHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitHubApp
 */
angular.module('gitHubApp')
    .controller('MainCtrl', function ($rootScope, $window) {



        $rootScope.navbarActive = "home";

        var elements = $('.reveal');
        var win = $(window);

        elements.css('opacity', 0);

        var isVisible = function(elem)
        {
            var docViewTop = win.scrollTop();
            var docViewBottom = docViewTop + win.height();

            var elemTop = elem.offset().top;
            var elemBottom = elemTop + elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        win.scroll(function(event) {
            elements.each(function(i, el) {
                var el = $(el);
                if (isVisible(el)) {
                    el.addClass("animated fadeInUp");
                }
            });
        });

    });
