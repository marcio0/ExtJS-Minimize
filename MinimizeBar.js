Ext.define('Ext.ux.plugin.minimize.MinimizeBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.minimizebar',
    requires: ['Ext.ux.plugin.minimize.MinimizePool'],
    height: 30,

    toggleMode: 'toggle',
    buttonConfig: {},
    minimizeAllButtonConfig: {},

    enableOverflow: true,

    layout: {
        type: 'hbox',
        align: 'stretch',
        overflowHandler: 'Menu'
    },

    defaults: {
        margin: '0 0 0 10'
    },

    initComponent: function(){
        var buttonConfig = {
            xtype: 'button',
            text: 'Minimize all',
            handler: function(){
                Ext.ux.plugin.minimize.MinimizePool._windows.each(function(item){
                    if(!item.minimized){
                        item.minimize();
                    }
                });
            }
        };

        Ext.apply(buttonConfig, this.minimizeAllButtonConfig);

        this.items = [
            { xtype: 'tbfill' },
            buttonConfig
        ];

        this.callParent(arguments);
        Ext.ux.plugin.minimize.MinimizePool.minimizePanel = this;
        Ext.ux.plugin.minimize.MinimizePool.toggleMode = this.toggleMode;
        Ext.ux.plugin.minimize.MinimizePool.buttonConfig = this.buttonConfig;
    }
});
