Ext.define('Ext.ux.plugin.minimize.MinimizedButton', {
    extend: 'Ext.button.Split',
    alias: 'widget.minimized',
    //TODO cls
    
    window: null,
    enableToggle: true,
    pressed: true,
    
    toggleHandler: function(button, state){
        //TODO animation
        if(state){
            if(Ext.ux.plugin.minimize.MinimizePool.toggleMode == 'hide'){
                this.hide();
            }
            this.window.show();
        } else {
            if(Ext.ux.plugin.minimize.MinimizePool.toggleMode == 'hide'){
                this.show();
            }
            this.window.hide();
        }
    },

    arrowHandler: function(){
        this.window.close();
    },
    
    initComponent: function(){
        if(Ext.ux.plugin.minimize.MinimizePool.toggleMode == 'hide'){
            this.hidden = true;
        }
        this.callParent(arguments);
    }
});
