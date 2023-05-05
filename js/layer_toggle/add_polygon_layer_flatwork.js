
function flatwork_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

  {

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';

            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {

     //           var filter_pass = [];

      //          for (var jj = 0; jj < property_filters.length; jj++)

      //          {


      //          }

//                if (property_filters.length == 1)

//                {

//                    filter_pass = [local_json_layer_obj['features']//[ii].properties.SCOPE.includes(property_filters[0])];

              //  }


                if (local_json_layer_obj['features'][ii].properties.inst_id.substring(0,5) == property_filters.substring(0,5).replace(':','-'))

                {

                    local_json_layer_obj['features'][ii].L_index_stored_in_each_feature = layer_index;
                    local_json_layer_obj['features'][ii].rgba_code_stored_in_each_feature = rgba_code;
                    master_layer_array[layer_index].features.push(local_json_layer_obj['features'][ii]);

                }

            }

            master_layer_array[layer_index].layer = new L.geoJson(master_layer_array[layer_index], {
                attribution: '',
                interactive: true,
                dataVar: 'L_'.concat(layer_index),
                layerName: 'L_'.concat(layer_index),
                pane: 'P_'.concat(layer_index),
                onEachFeature: pop_up_creator_for_domain,
                style: flatwork_layer_styler,
            });
            bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }               

}

function flatwork_layer_styler(feature) {
  return {
    pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 1,
    fillColor: feature.rgba_code_stored_in_each_feature,
    interactive: true,
  }
}

function unpack_flatwork_feature_description(property_filters)

{

    var output_L_desc = '';


        if  (property_filters == 'G-1')
        
        {
        
           output_L_desc = 'Temporary Retroflective Pavement Markings';
         
         } else if (property_filters == 'R-2')

        {

            output_L_desc = 'Full Depth Planning per 2in Depth of Cut';

        } else if (property_filters == 'R-3')

        {

            output_L_desc = 'Hot Mix Asphalt';

        } else if (property_filters == 'R-4')

        {

            output_L_desc = '8-Inch Thick Concrete Base';

        } else if (property_filters == 'R-5')

        {

            output_L_desc = '10-Inch Thick Concrete Base';

        } else if (property_filters == 'R-6')

        {

            output_L_desc = '8-Inch Thick Concrete Pavement, Parking Strip or Gutter';

        } else if (property_filters == 'R-7')

        {

            output_L_desc = '10-Inch Thick Concrete Bus Pad';

        } else if (property_filters == 'R-8')

        {

            output_L_desc = 'Class II Aggregate Base for Bus Pads';

        } else if (property_filters == 'R-9')

        {

            output_L_desc = '3.5-Inch Thick Sidewalk';

        } else if (property_filters == 'R-10')

        {

            output_L_desc = '6-Inch Wide Concrete Curb';

        } else if (property_filters == 'R-11')

        {

            output_L_desc = '4-Inch Wide Concrete Curb';

        } else if (property_filters == 'R-12')

        {

            output_L_desc = 'Reset Existing Granite Curb';

        } else if (property_filters == 'R-12A')

        {

            output_L_desc = 'Install New Granite Curb';

        } else if (property_filters == 'R-13')

        {

            output_L_desc = 'Combined Curb and Gutter';

        } else if (property_filters == 'R-14')

        {

            output_L_desc = 'Curb Ramp';

        } else if (property_filters == 'R-15')

        {

            output_L_desc = 'Type I Pullbox';

        } else if (property_filters == 'R-17')

        {

            output_L_desc = 'HMA Speed Hump / Cushion';

        } else if (property_filters == 'R-23')

        {

            output_L_desc = 'Reset Existing Brick Pavers';

        } else if (property_filters == 'SW-30')

        {

            output_L_desc = 'Concrete Base Restoration outside Sewer Trench Limits';

        } 

        return output_L_desc

}

