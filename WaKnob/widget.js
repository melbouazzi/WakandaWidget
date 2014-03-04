WAF.define('WaKnob', ['waf-core/widget'], function(widget) {

    var WaKnob = widget.create('WaKnob', {
        init: function() {
            /*        	
                        var max = 20;
            var min = 0;
            var step = 1;
            this.node.innerHTML = '<input class="preset2" type="range" min="' + min +'" max="' + max + '" data-width="200" data-height="200" '+
            						' data-angleoffset="220" data-anglerange="280" tabindex="-1" style="position: absolute; top: -10000px;">';
            var knob = new Knob( this.node.getElementsByTagName('input')[0], new Ui['P2']() );
  */
            this.render();
            this.presets.onChange(this.render);
        },

        /* Create a property */
        
        max: widget.property({
            defaultValue: 20,
            bindable : false
            /*,onChange : function(newValue){
        		max = this.max();
        		this.node.innerHTML = '<input class="preset2" type="range" min="' + this.min() +'" max="' + max + '" data-width="200" data-height="200" '+
            						' data-angleoffset="220" data-anglerange="280" tabindex="-1" style="position: absolute; top: -10000px;">';
                new Knob( this.node.getElementsByTagName('input')[0], new Ui['P2']() );	
        	}*/
        }),

        min: widget.property({
            defaultValue: 0,
            bindable : false
        }),

        step: widget.property({
            defaultValue: 1,
            bindable : false
        }),

        render: function() {
            this.node.innerHTML = '<input class="' + this.presets() + '" type="range" min="' + this.min() + '" max="' + this.max() + '" data-width="200" data-height="200" ' + ' data-angleoffset="220" data-anglerange="280" tabindex="-1" style="position: absolute; top: -10000px;">';
            var presetId;
            switch (this.presets()) {
            case 'presets1':
                presetId = 'P1';
                break;
            case 'presets2':
                presetId = 'P2';
                break;
            case 'presets3':
                presetId = 'P3';
                break;
            }
            new Knob(this.node.getElementsByTagName('input')[0], new Ui[presetId]());
        },

        presets: widget.property({
            type: "enum",
            bindable: false,
            "values": {
                presets2: 'presets2',
                presets1: 'presets1',
                presets3: 'presets3'
            },
            defaultValue: 'presets1'
        })

    });

    //    /* Map the custom event above to the DOM click event */
    //    WaKnob.mapDomEvents({
    //        'click': 'action'
    //    });
    return WaKnob;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */