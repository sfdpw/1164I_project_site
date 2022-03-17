function pop_012_SW_sewer_318(feature, layer) {
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

function style_012_SW_sewer_318_0() {
  return {
    pane: 'pane_012_SW_sewer_318',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(133, 182, 111, 1.0)',
    interactive: true,
  }
}

        map.createPane('pane_1164I_010_PRJCT_DWGS_64_SW');
        map.getPane('pane_1164I_010_PRJCT_DWGS_64_SW').style.zIndex = 52;
        map.getPane('pane_1164I_010_PRJCT_DWGS_64_SW').style['mix-blend-mode'] = 'normal';

        var layer_1164I_010_PRJCT_DWGS_64_SW = new L.geoJson(layer_filter('PLAN_BOUNDARY_SW', json_1164I_010_PRJCT_DWGS_64), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1164I_010_PRJCT_DWGS_64_SW',
            layerName: 'layer_1164I_010_PRJCT_DWGS_64_SW',
            pane: 'pane_1164I_010_PRJCT_DWGS_64_SW',
            onEachFeature: pop_012_SW_sewer_318,
            style: style_1164I_010_PRJCT_DWGS_64_0,
        });


function SW_012_toggle() {

  if (document.getElementById("012_SW_checkbox").checked) {

    layer_012_SW_sewer_318 = new L.geoJson(layer_filter('PLAN_BOUNDARY_SW', json_1164I_010_PRJCT_DWGS_64), {
      attribution: '',
      interactive: true,
      dataVar: 'json_012_SW_sewer_318',
      layerName: 'layer_012_SW_sewer_318',
      pane: 'pane_012_SW_sewer_318',
      onEachFeature: pop_012_SW_sewer_318,
      style: style_012_SW_sewer_318_0,
    });
    
        bounds_group.addLayer(layer_1164I_010_PRJCT_DWGS_64_SW);
        map.addLayer(layer_1164I_010_PRJCT_DWGS_64_SW);

  } else {
  
    map.removeLayer(layer_1164I_010_PRJCT_DWGS_64_SW);
    
  }

}
