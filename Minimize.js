Ext.define('Ext.ux.Minimize', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.Minimize',
    requires: ['Ext.ux.MinimizePool'],
    
    init: function(window){
        //TODO verificar se é window
        var title = window.minimizedTitle || window.title,
            minimizePanel = Ext.ux.MinimizePool.minimizePanel;
        window.minimizable = true;

        var button = Ext.create('Ext.ux.Minimized', {
            window: window,
            text: title
        });
        
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
