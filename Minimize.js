Ext.define('Ext.ux.plugin.minimize.Minimize', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.Minimize',
    requires: ['Ext.ux.plugin.minimize.MinimizePool'],
    
    init: function(window){
        //TODO verificar se é window
        window.minimizable = true;
        if(Ext.ux.plugin.minimize.MinimizePool.toggleMode == 'toggle'){
            var title = window.minimizedTitle || window.title,
                minimizePanel = Ext.ux.plugin.minimize.MinimizePool.minimizePanel;

            var buttonConfig = {
                window: window,
                text: title,
                enableToggle: true,
                pressed: true,
                toggleHandler: this.toggleHandler
            };
            
            button = this.addMinimizedButton(buttonConfig);

            window.on('minimize', this.toggleMinimizeHandler, this, {button: button});
            window.on('close', this.closeWindow, this, {button: button});
            //TODO titlechange!
        }
        else if(Ext.ux.plugin.minimize.MinimizePool.toggleMode == 'hide'){
            window.on('minimize', this.hideMinimizeHandler, this);
            window.on('close', this.closeWindow, this);
        }
    },
    
    addMinimizedButton: function(config){
        var minimizePanel = Ext.ux.plugin.minimize.MinimizePool.minimizePanel,
            pos = minimizePanel.items.length - 2;

        for(var attrname in Ext.ux.plugin.minimize.MinimizePool.buttonConfig){
            config[attrname] = Ext.ux.plugin.minimize.MinimizePool.buttonConfig[attrname]; 
        }

        var button = Ext.create('Ext.button.Button', config);

        minimizePanel.insert(pos, button);

        return button;
    },
    
    hideMinimizeHandler: function(window){
        var title = window.minimizedTitle || window.title;

        var buttonConfig = {
            window: window,
            text: title,
            handler: this.showHandler
        };

        this.addMinimizedButton(buttonConfig);
        window.hide();
    },
    
    closeWindow: function(window, opts){
        var button = opts.button;
        button.destroy();
    },
    
    toggleMinimizeHandler: function(window, opts){
        var button = opts.button;
        button.toggle(false);
    },
    
    showHandler: function(){
        this.window.show();
        this.destroy();
    },
    
    toggleHandler: function(button, state){
        //TODO animation
        if(state){
            this.window.show();
        } else {
            this.window.hide();
        }
    },
});
