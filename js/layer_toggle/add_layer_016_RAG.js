function pop_016_RAG_align_and_grad_318(feature, layer) {
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

function style_016_RAG_align_and_grad_318_0() {
  return {
    pane: 'pane_016_RAG_align_and_grad_318',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(145,82,46,1.0)',
    interactive: true,
  }
}

        map.createPane('pane_1164I_010_PRJCT_DWGS_64_RAG');
        map.getPane('pane_1164I_010_PRJCT_DWGS_64_RAG').style.zIndex = 53;
        map.getPane('pane_1164I_010_PRJCT_DWGS_64_RAG').style['mix-blend-mode'] = 'normal';

        var layer_1164I_010_PRJCT_DWGS_64_RAG = new L.geoJson(layer_filter('PLAN_BOUNDARY_RAG', json_1164I_010_PRJCT_DWGS_64), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1164I_010_PRJCT_DWGS_64_RAG',
            layerName: 'layer_1164I_010_PRJCT_DWGS_64_RAG',
            pane: 'pane_1164I_010_PRJCT_DWGS_64_RAG',
            onEachFeature: pop_016_RAG_align_and_grad_318,
            style: style_1164I_010_PRJCT_DWGS_64_0,
        });
        

function RAG_016_toggle() {

  if (document.getElementById("016_RAG_checkbox").checked) {

    layer_016_RAG_align_and_grad_318 = new L.geoJson(layer_filter('PLAN_BOUNDARY_RAG', json_1164I_010_PRJCT_DWGS_64), {
      attribution: '',
      interactive: true,
      dataVar: 'json_016_RAG_align_and_grad_318',
      layerName: 'layer_016_RAG_align_and_grad_318',
      pane: 'pane_016_RAG_align_and_grad_318',
      onEachFeature: pop_016_RAG_align_and_grad_318,
      style: style_016_RAG_align_and_grad_318_0,
    });
    
        bounds_group.addLayer(layer_1164I_010_PRJCT_DWGS_64_RAG);
        map.addLayer(layer_1164I_010_PRJCT_DWGS_64_RAG);

  } else {
  
    map.removeLayer(layer_1164I_010_PRJCT_DWGS_64_RAG);
    
  }

}
