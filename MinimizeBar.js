Ext.define('Ext.ux.plugin.minimize.MinimizeBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.minimizebar',
    requires: ['Ext.ux.plugin.minimize.MinimizePool'],
    height: 30,

    toggleMode: 'toggle',
    buttonConfig: {},

    items: [
        { xtype: 'tbfill' },
        {
            xtype: 'button',
            icon: 'http://i.imgur.com/vI8x5.png'
        }
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    defaults: {
        margin: '0 0 0 10'
    },

    initComponent: function(){
        this.callParent(arguments);
        Ext.ux.plugin.minimize.MinimizePool.minimizePanel = this;
        Ext.ux.plugin.minimize.MinimizePool.toggleMode = this.toggleMode;
        Ext.ux.plugin.minimize.MinimizePool.buttonConfig = this.buttonConfig;
    }
});
