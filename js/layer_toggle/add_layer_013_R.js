function pop_013_R_flatwork_318(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
               
popupContent = return_plan_boundary_popup(feature);               
                                                        
layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_013_R_flatwork_318_0() {
  return {
    pane: 'pane_013_R_flatwork_318',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(199, 112, 135, 1.0)',
    interactive: true,
  }
}

        map.createPane('pane_1164I_010_PRJCT_DWGS_64_R');
        map.getPane('pane_1164I_010_PRJCT_DWGS_64_R').style.zIndex = 53;
        map.getPane('pane_1164I_010_PRJCT_DWGS_64_R').style['mix-blend-mode'] = 'normal';

        var layer_1164I_010_PRJCT_DWGS_64_R = new L.geoJson(layer_filter('PLAN_BOUNDARY_R', json_1164I_010_PRJCT_DWGS_64), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1164I_010_PRJCT_DWGS_64_R',
            layerName: 'layer_1164I_010_PRJCT_DWGS_64_R',
            pane: 'pane_1164I_010_PRJCT_DWGS_64_R',
            onEachFeature: pop_013_R_flatwork_318,
            style: style_1164I_010_PRJCT_DWGS_64_0,
        });
        

function R_013_toggle() {

  if (document.getElementById("013_R_checkbox").checked) {

    layer_013_R_flatwork_318 = new L.geoJson(layer_filter('PLAN_BOUNDARY_R', json_1164I_010_PRJCT_DWGS_64), {
      attribution: '',
      interactive: true,
      dataVar: 'json_013_R_flatwork_318',
      layerName: 'layer_013_R_flatwork_318',
      pane: 'pane_013_R_flatwork_318',
      onEachFeature: pop_013_R_flatwork_318,
      style: style_013_R_flatwork_318_0,
    });
    
        bounds_group.addLayer(layer_1164I_010_PRJCT_DWGS_64_R);
        map.addLayer(layer_1164I_010_PRJCT_DWGS_64_R);

  } else {
  
    map.removeLayer(layer_1164I_010_PRJCT_DWGS_64_R);
    
  }

}
