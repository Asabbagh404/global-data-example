export default {
    install: function (Vue, options) {
        // 1. ajouter une méthode globale ou une propriété
        Vue.myGlobalMethod = function () {
            // de la logique de code...
            console.log(options)
        }

        // 2. ajouter une ressource globale
        Vue.directive("highlight", {
            inserted(el) {
                el.style.color = "red";
            }
        });

        // 3. injecter des options de composant
        Vue.mixin({
            created: function () {
                // de la logique de code...
                console.log('foo')
            },
        })

        // 4. ajouter une méthode d'instance
        Vue.prototype.$myMethod = function (methodOptions) {
            // de la logique de code...
            return methodOptions;
        }
    }
}