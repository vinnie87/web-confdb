Ext.define('Demo110315.model.ESModuledetails', {
    extend: 'Demo110315.model.Base',
    
    fields: [
        { name: 'name', type: 'string' },
        { name: 'mt', type: 'string' },
        { name: 'mclass', type: 'string' },
        { name: 'author', type: 'string' }

    ],
    
    proxy: {
        type: 'ajax',
        url : '/esmoddetails',
        headers: {'Content-Type': "application/json" },
        limitParam: '',
        pageParam: '',
        sortParam: '',
        //extraParams: {'itype':'{selectedPathitem.pit}'},
        startParam : '',
        reader: {
            type: 'json',
            rootProperty: 'children'
        }
//        lazyFill: true
    }
});
