var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_accontrolroom_1 = new ol.format.GeoJSON();
var features_accontrolroom_1 = format_accontrolroom_1.readFeatures(json_accontrolroom_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_accontrolroom_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_accontrolroom_1.addFeatures(features_accontrolroom_1);
var lyr_accontrolroom_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_accontrolroom_1, 
                style: style_accontrolroom_1,
                interactive: true,
                title: '<img src="styles/legend/accontrolroom_1.png" /> ac control room'
            });
var format_laundrymachineroom_2 = new ol.format.GeoJSON();
var features_laundrymachineroom_2 = format_laundrymachineroom_2.readFeatures(json_laundrymachineroom_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_laundrymachineroom_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_laundrymachineroom_2.addFeatures(features_laundrymachineroom_2);
var lyr_laundrymachineroom_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_laundrymachineroom_2, 
                style: style_laundrymachineroom_2,
                interactive: true,
                title: '<img src="styles/legend/laundrymachineroom_2.png" /> laundry machine room'
            });
var format_oldblock_3 = new ol.format.GeoJSON();
var features_oldblock_3 = format_oldblock_3.readFeatures(json_oldblock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oldblock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oldblock_3.addFeatures(features_oldblock_3);
var lyr_oldblock_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oldblock_3, 
                style: style_oldblock_3,
                interactive: true,
                title: '<img src="styles/legend/oldblock_3.png" /> old block'
            });
var format_researchlab_4 = new ol.format.GeoJSON();
var features_researchlab_4 = format_researchlab_4.readFeatures(json_researchlab_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_researchlab_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_researchlab_4.addFeatures(features_researchlab_4);
var lyr_researchlab_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_researchlab_4, 
                style: style_researchlab_4,
                interactive: true,
                title: '<img src="styles/legend/researchlab_4.png" /> research lab'
            });
var format_totalfresh_5 = new ol.format.GeoJSON();
var features_totalfresh_5 = format_totalfresh_5.readFeatures(json_totalfresh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_totalfresh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_totalfresh_5.addFeatures(features_totalfresh_5);
var lyr_totalfresh_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_totalfresh_5, 
                style: style_totalfresh_5,
                interactive: true,
                title: '<img src="styles/legend/totalfresh_5.png" /> total fresh'
            });
var format_tower1_6 = new ol.format.GeoJSON();
var features_tower1_6 = format_tower1_6.readFeatures(json_tower1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tower1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tower1_6.addFeatures(features_tower1_6);
var lyr_tower1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tower1_6, 
                style: style_tower1_6,
                interactive: true,
                title: '<img src="styles/legend/tower1_6.png" /> tower 1'
            });
var format_tower2_7 = new ol.format.GeoJSON();
var features_tower2_7 = format_tower2_7.readFeatures(json_tower2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tower2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tower2_7.addFeatures(features_tower2_7);
var lyr_tower2_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tower2_7, 
                style: style_tower2_7,
                interactive: true,
                title: '<img src="styles/legend/tower2_7.png" /> tower 2'
            });
var format_tower3_8 = new ol.format.GeoJSON();
var features_tower3_8 = format_tower3_8.readFeatures(json_tower3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tower3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tower3_8.addFeatures(features_tower3_8);
var lyr_tower3_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tower3_8, 
                style: style_tower3_8,
                interactive: true,
                title: '<img src="styles/legend/tower3_8.png" /> tower 3'
            });
var format_tower4_9 = new ol.format.GeoJSON();
var features_tower4_9 = format_tower4_9.readFeatures(json_tower4_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tower4_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tower4_9.addFeatures(features_tower4_9);
var lyr_tower4_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tower4_9, 
                style: style_tower4_9,
                interactive: true,
                title: '<img src="styles/legend/tower4_9.png" /> tower 4'
            });
var format_tower5_10 = new ol.format.GeoJSON();
var features_tower5_10 = format_tower5_10.readFeatures(json_tower5_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tower5_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tower5_10.addFeatures(features_tower5_10);
var lyr_tower5_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tower5_10, 
                style: style_tower5_10,
                interactive: true,
                title: '<img src="styles/legend/tower5_10.png" /> tower 5'
            });
var format_xlab_11 = new ol.format.GeoJSON();
var features_xlab_11 = format_xlab_11.readFeatures(json_xlab_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_xlab_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xlab_11.addFeatures(features_xlab_11);
var lyr_xlab_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_xlab_11, 
                style: style_xlab_11,
                interactive: true,
                title: '<img src="styles/legend/xlab_11.png" /> x-lab'
            });
var format_trees_12 = new ol.format.GeoJSON();
var features_trees_12 = format_trees_12.readFeatures(json_trees_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trees_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trees_12.addFeatures(features_trees_12);
var lyr_trees_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trees_12, 
                style: style_trees_12,
                interactive: true,
                title: '<img src="styles/legend/trees_12.png" /> trees'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_accontrolroom_1.setVisible(true);lyr_laundrymachineroom_2.setVisible(true);lyr_oldblock_3.setVisible(true);lyr_researchlab_4.setVisible(true);lyr_totalfresh_5.setVisible(true);lyr_tower1_6.setVisible(true);lyr_tower2_7.setVisible(true);lyr_tower3_8.setVisible(true);lyr_tower4_9.setVisible(true);lyr_tower5_10.setVisible(true);lyr_xlab_11.setVisible(true);lyr_trees_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_accontrolroom_1,lyr_laundrymachineroom_2,lyr_oldblock_3,lyr_researchlab_4,lyr_totalfresh_5,lyr_tower1_6,lyr_tower2_7,lyr_tower3_8,lyr_tower4_9,lyr_tower5_10,lyr_xlab_11,lyr_trees_12];
lyr_accontrolroom_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_laundrymachineroom_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_oldblock_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_researchlab_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_totalfresh_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tower1_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tower2_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tower3_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tower4_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tower5_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_xlab_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_trees_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_accontrolroom_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_laundrymachineroom_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_oldblock_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_researchlab_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_totalfresh_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_tower1_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_tower2_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_tower3_8.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_tower4_9.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_tower5_10.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_xlab_11.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_trees_12.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_accontrolroom_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'header label', });
lyr_laundrymachineroom_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_oldblock_3.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_researchlab_4.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_totalfresh_5.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_tower1_6.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_tower2_7.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_tower3_8.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_tower4_9.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_tower5_10.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_xlab_11.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_trees_12.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_trees_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});