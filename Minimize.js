Ext.define('Ext.ux.plugin.minimize.Minimize', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.Minimize',
    requires: ['Ext.ux.plugin.minimize.MinimizePool', 'Ext.ux.plugin.minimize.MinimizedButton'],
    
    init: function(window){
        //TODO verificar se é window
        var title = window.minimizedTitle || window.title,
            minimizePanel = Ext.ux.plugin.minimize.MinimizePool.minimizePanel;
        window.minimizable = true;
        
        var buttonConfig = {window: window, text: title};
        for(var attrname in Ext.ux.plugin.minimize.MinimizePool.buttonConfig){
            buttonConfig[attrname] = Ext.ux.plugin.minimize.MinimizePool.buttonConfig[attrname]; 
        }

        var button = Ext.create('Ext.ux.plugin.minimize.MinimizedButton', buttonConfig);
        
        minimizePanel.add(button);

        window.on('minimize', this.minimize, this, {button: button});
        window.on('close', this.close, this, {button: button});
    },
    
    close: function(window, opts){
        var button = opts.button;
        button.destroy();
    },
    
    minimize: function(window, opts){
        var button = opts.button;
        button.toggle(false);
    }
});
