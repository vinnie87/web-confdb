
Ext.define("Demo110315.view.service.ServicePrescaleTab",{
    extend: "Ext.panel.Panel",
    
    requires:['Demo110315.view.service.PrescaleGrid'],
    
    alias: 'widget.prescaletab',
    
    reference: 'prescaleTab',
    
    controller: "service-serviceprescaletab",
    
    layout: {
//        type: 'vbox',
//        align: 'stretch'
        type: 'border'
    },
    title: 'Prescale Table',
//    enableLocking: true,
    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            paddingLeft: 5,
            items:[ 
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Search',
                        labelWidth: 47,
                        enableKeyEvents: true,
                        disabled: true
                    }
                ]
        }

    ]
});

