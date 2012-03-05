Ext.define('Ext.ux.MinimizedButton', {
    extend: 'Ext.button.Button',
    alias: 'widget.minimized',
    //TODO cls
    
    window: null,
    enableToggle: true,
    pressed: true,
    
    toggleHandler: function(button, state){
        //TODO animation
        if(state){
            if(Ext.ux.MinimizePool.toggleMode == 'hide'){
                this.hide();
            }
            this.window.show();
        } else {
            if(Ext.ux.MinimizePool.toggleMode == 'hide'){
                this.show();
            }
            this.window.hide();
        }
    },
    
    initComponent: function(){
        if(Ext.ux.MinimizePool.toggleMode == 'hide'){
            this.hidden = true;
        }
        this.callParent(arguments);
    }
});
