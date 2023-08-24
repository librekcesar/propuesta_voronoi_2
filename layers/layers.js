var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_metro_1 = new ol.format.GeoJSON();
var features_metro_1 = format_metro_1.readFeatures(json_metro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_metro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_metro_1.addFeatures(features_metro_1);
var lyr_metro_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_metro_1, 
                style: style_metro_1,
                interactive: false,
                title: '<img src="styles/legend/metro_1.png" /> metro'
            });
var format_Isochrones_huix_2 = new ol.format.GeoJSON();
var features_Isochrones_huix_2 = format_Isochrones_huix_2.readFeatures(json_Isochrones_huix_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones_huix_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones_huix_2.addFeatures(features_Isochrones_huix_2);
var lyr_Isochrones_huix_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isochrones_huix_2, 
                style: style_Isochrones_huix_2,
                interactive: true,
    title: 'Isochrones_huix<br />\
    <img src="styles/legend/Isochrones_huix_2_0.png" /> 25 min<br />'
        });
var format_Isochrones_tulti_3 = new ol.format.GeoJSON();
var features_Isochrones_tulti_3 = format_Isochrones_tulti_3.readFeatures(json_Isochrones_tulti_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones_tulti_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones_tulti_3.addFeatures(features_Isochrones_tulti_3);
var lyr_Isochrones_tulti_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isochrones_tulti_3, 
                style: style_Isochrones_tulti_3,
                interactive: true,
    title: 'Isochrones_tulti<br />\
    <img src="styles/legend/Isochrones_tulti_3_0.png" /> 25 min<br />'
        });
var format_Isochrones_mx4_4 = new ol.format.GeoJSON();
var features_Isochrones_mx4_4 = format_Isochrones_mx4_4.readFeatures(json_Isochrones_mx4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones_mx4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones_mx4_4.addFeatures(features_Isochrones_mx4_4);
var lyr_Isochrones_mx4_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isochrones_mx4_4, 
                style: style_Isochrones_mx4_4,
                interactive: true,
    title: 'Isochrones_mx4<br />\
    <img src="styles/legend/Isochrones_mx4_4_0.png" /> 25 min<br />'
        });
var format_estaciones_5 = new ol.format.GeoJSON();
var features_estaciones_5 = format_estaciones_5.readFeatures(json_estaciones_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estaciones_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaciones_5.addFeatures(features_estaciones_5);
var lyr_estaciones_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estaciones_5, 
                style: style_estaciones_5,
                interactive: true,
                title: '<img src="styles/legend/estaciones_5.png" /> estaciones'
            });
var format_poligon_voronoi_6 = new ol.format.GeoJSON();
var features_poligon_voronoi_6 = format_poligon_voronoi_6.readFeatures(json_poligon_voronoi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligon_voronoi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligon_voronoi_6.addFeatures(features_poligon_voronoi_6);
var lyr_poligon_voronoi_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligon_voronoi_6, 
                style: style_poligon_voronoi_6,
                interactive: true,
                title: '<img src="styles/legend/poligon_voronoi_6.png" /> poligon_voronoi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_metro_1.setVisible(true);lyr_Isochrones_huix_2.setVisible(true);lyr_Isochrones_tulti_3.setVisible(true);lyr_Isochrones_mx4_4.setVisible(true);lyr_estaciones_5.setVisible(true);lyr_poligon_voronoi_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_metro_1,lyr_Isochrones_huix_2,lyr_Isochrones_tulti_3,lyr_Isochrones_mx4_4,lyr_estaciones_5,lyr_poligon_voronoi_6];
lyr_metro_1.set('fieldAliases', {'zipcode': 'zipcode', 'country': 'country', 'state': 'state', 'catstationid': 'catstationid', 'station_code': 'station_code', 'region': 'region', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'locality': 'locality', 'station_name': 'station_name', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'fid': 'fid', 'zonificacion': 'zonificacion', 'neighborhood': 'neighborhood', 'id': 'id', });
lyr_Isochrones_huix_2.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', });
lyr_Isochrones_tulti_3.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', });
lyr_Isochrones_mx4_4.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', });
lyr_estaciones_5.set('fieldAliases', {'id': 'id', 'layer': 'layer', });
lyr_poligon_voronoi_6.set('fieldAliases', {'zonificacion_voronoi': 'zonificacion_voronoi', });
lyr_metro_1.set('fieldImages', {'zipcode': 'TextEdit', 'country': 'TextEdit', 'state': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'region': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'Range', 'locality': 'TextEdit', 'station_name': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'fid': 'TextEdit', 'zonificacion': 'TextEdit', 'neighborhood': 'TextEdit', 'id': 'TextEdit', });
lyr_Isochrones_huix_2.set('fieldImages', {'AA_MINS': '', 'AA_MODE': '', });
lyr_Isochrones_tulti_3.set('fieldImages', {'AA_MINS': '', 'AA_MODE': '', });
lyr_Isochrones_mx4_4.set('fieldImages', {'AA_MINS': '', 'AA_MODE': '', });
lyr_estaciones_5.set('fieldImages', {'id': 'Range', 'layer': 'TextEdit', });
lyr_poligon_voronoi_6.set('fieldImages', {'zonificacion_voronoi': 'TextEdit', });
lyr_metro_1.set('fieldLabels', {'zipcode': 'no label', 'country': 'no label', 'state': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'region': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'locality': 'no label', 'station_name': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'fid': 'no label', 'zonificacion': 'no label', 'neighborhood': 'no label', 'id': 'no label', });
lyr_Isochrones_huix_2.set('fieldLabels', {'AA_MINS': 'header label', 'AA_MODE': 'header label', });
lyr_Isochrones_tulti_3.set('fieldLabels', {'AA_MINS': 'header label', 'AA_MODE': 'header label', });
lyr_Isochrones_mx4_4.set('fieldLabels', {'AA_MINS': 'header label', 'AA_MODE': 'header label', });
lyr_estaciones_5.set('fieldLabels', {'id': 'header label', 'layer': 'header label', });
lyr_poligon_voronoi_6.set('fieldLabels', {'zonificacion_voronoi': 'header label', });
lyr_poligon_voronoi_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});