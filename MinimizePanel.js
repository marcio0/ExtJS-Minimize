Ext.define('Ext.ux.MinimizePanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.minimizepanel',
    requires: ['Ext.ux.MinimizePool'],
    height: 30,
    
    toggleMode: 'hide',
    buttonConfig: {},
    
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    
    defaults: {
        margin: '0 0 0 10'
    },

    initComponent: function(){
        this.callParent(arguments);
        Ext.ux.MinimizePool.minimizePanel = this;
        Ext.ux.MinimizePool.toggleMode = this.toggleMode;
        Ext.ux.MinimizePool.buttonConfig = this.buttonConfig;
    }
});
