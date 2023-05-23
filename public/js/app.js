var h5 = h5 || {};
(function (ui) {

    var app = h5;

    app.init = function(){
        this.events.init();
        this.setActiveMenuItem();
        this.enableTooltips();
        this.changeRole();
    }
    app.changeRole = function(){
        $(document).on("change",".change-role",function(){
            window.location = $(this).val();
        });
    };
    app.enableTooltips = function(){
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    };
    app.events = {
        init: function(){
            this.onMainMenuToggleClick();
        },
        onMainMenuToggleClick: function(){
            $(document).on("click","#MainMenuToggle",function(){
                $("body").toggleClass("close-menu");
            });
        }
    };
    app.setActiveMenuItem = function(){
        var path = window.location.pathname;
        $("#Nav .menu .active").removeClass("active");
        $("#Nav .menu a[href='"+path+"']").addClass("active");
    };

})(h5);

$(document).ready(function () {
    h5.init();
});

