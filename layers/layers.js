var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pszczki_1 = new ol.format.GeoJSON();
var features_Pszczki_1 = format_Pszczki_1.readFeatures(json_Pszczki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pszczki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pszczki_1.addFeatures(features_Pszczki_1);
var lyr_Pszczki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pszczki_1, 
                style: style_Pszczki_1,
                popuplayertitle: 'Pszczółki',
                interactive: true,
                title: '<img src="styles/legend/Pszczki_1.png" /> Pszczółki'
            });
var format_Hipper_2 = new ol.format.GeoJSON();
var features_Hipper_2 = format_Hipper_2.readFeatures(json_Hipper_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hipper_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hipper_2.addFeatures(features_Hipper_2);
var lyr_Hipper_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hipper_2, 
                style: style_Hipper_2,
                popuplayertitle: 'Hipper',
                interactive: true,
                title: '<img src="styles/legend/Hipper_2.png" /> Hipper'
            });
var format_MerkuryMarket_3 = new ol.format.GeoJSON();
var features_MerkuryMarket_3 = format_MerkuryMarket_3.readFeatures(json_MerkuryMarket_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MerkuryMarket_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MerkuryMarket_3.addFeatures(features_MerkuryMarket_3);
var lyr_MerkuryMarket_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MerkuryMarket_3, 
                style: style_MerkuryMarket_3,
                popuplayertitle: 'Merkury Market',
                interactive: true,
                title: '<img src="styles/legend/MerkuryMarket_3.png" /> Merkury Market'
            });
var format_OBIgpkg_4 = new ol.format.GeoJSON();
var features_OBIgpkg_4 = format_OBIgpkg_4.readFeatures(json_OBIgpkg_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBIgpkg_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBIgpkg_4.addFeatures(features_OBIgpkg_4);
var lyr_OBIgpkg_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBIgpkg_4, 
                style: style_OBIgpkg_4,
                popuplayertitle: 'OBI.gpkg',
                interactive: true,
                title: '<img src="styles/legend/OBIgpkg_4.png" /> OBI.gpkg'
            });
var format_MrwkaExpressgpkg_5 = new ol.format.GeoJSON();
var features_MrwkaExpressgpkg_5 = format_MrwkaExpressgpkg_5.readFeatures(json_MrwkaExpressgpkg_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MrwkaExpressgpkg_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MrwkaExpressgpkg_5.addFeatures(features_MrwkaExpressgpkg_5);
var lyr_MrwkaExpressgpkg_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MrwkaExpressgpkg_5, 
                style: style_MrwkaExpressgpkg_5,
                popuplayertitle: 'Mrówka Express.gpkg',
                interactive: true,
                title: '<img src="styles/legend/MrwkaExpressgpkg_5.png" /> Mrówka Express.gpkg'
            });
var format_Mrwka_Standard1mrwka_standard__mrwka_standard_6 = new ol.format.GeoJSON();
var features_Mrwka_Standard1mrwka_standard__mrwka_standard_6 = format_Mrwka_Standard1mrwka_standard__mrwka_standard_6.readFeatures(json_Mrwka_Standard1mrwka_standard__mrwka_standard_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mrwka_Standard1mrwka_standard__mrwka_standard_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mrwka_Standard1mrwka_standard__mrwka_standard_6.addFeatures(features_Mrwka_Standard1mrwka_standard__mrwka_standard_6);
var lyr_Mrwka_Standard1mrwka_standard__mrwka_standard_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mrwka_Standard1mrwka_standard__mrwka_standard_6, 
                style: style_Mrwka_Standard1mrwka_standard__mrwka_standard_6,
                popuplayertitle: 'Mrówka_Standard (1) — mrwka_standard__mrwka_standard',
                interactive: true,
                title: '<img src="styles/legend/Mrwka_Standard1mrwka_standard__mrwka_standard_6.png" /> Mrówka_Standard (1) — mrwka_standard__mrwka_standard'
            });
var format_MrwkaMinimrwkimini__mrwka_mini_7 = new ol.format.GeoJSON();
var features_MrwkaMinimrwkimini__mrwka_mini_7 = format_MrwkaMinimrwkimini__mrwka_mini_7.readFeatures(json_MrwkaMinimrwkimini__mrwka_mini_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MrwkaMinimrwkimini__mrwka_mini_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MrwkaMinimrwkimini__mrwka_mini_7.addFeatures(features_MrwkaMinimrwkimini__mrwka_mini_7);
var lyr_MrwkaMinimrwkimini__mrwka_mini_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MrwkaMinimrwkimini__mrwka_mini_7, 
                style: style_MrwkaMinimrwkimini__mrwka_mini_7,
                popuplayertitle: 'Mrówka Mini — mrwkimini__mrwka_mini',
                interactive: true,
                title: '<img src="styles/legend/MrwkaMinimrwkimini__mrwka_mini_7.png" /> Mrówka Mini — mrwkimini__mrwka_mini'
            });
var format_SzopMarket_8 = new ol.format.GeoJSON();
var features_SzopMarket_8 = format_SzopMarket_8.readFeatures(json_SzopMarket_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SzopMarket_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SzopMarket_8.addFeatures(features_SzopMarket_8);
var lyr_SzopMarket_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SzopMarket_8, 
                style: style_SzopMarket_8,
                popuplayertitle: 'Szop Market',
                interactive: true,
                title: '<img src="styles/legend/SzopMarket_8.png" /> Szop Market'
            });
var format_Greinplast_9 = new ol.format.GeoJSON();
var features_Greinplast_9 = format_Greinplast_9.readFeatures(json_Greinplast_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Greinplast_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greinplast_9.addFeatures(features_Greinplast_9);
var lyr_Greinplast_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Greinplast_9, 
                style: style_Greinplast_9,
                popuplayertitle: 'Greinplast',
                interactive: true,
                title: '<img src="styles/legend/Greinplast_9.png" /> Greinplast'
            });
var format_LeroyMerlingpkg_10 = new ol.format.GeoJSON();
var features_LeroyMerlingpkg_10 = format_LeroyMerlingpkg_10.readFeatures(json_LeroyMerlingpkg_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeroyMerlingpkg_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeroyMerlingpkg_10.addFeatures(features_LeroyMerlingpkg_10);
var lyr_LeroyMerlingpkg_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeroyMerlingpkg_10, 
                style: style_LeroyMerlingpkg_10,
                popuplayertitle: 'Leroy Merlin.gpkg',
                interactive: true,
                title: '<img src="styles/legend/LeroyMerlingpkg_10.png" /> Leroy Merlin.gpkg'
            });
var format_Julagpkg_11 = new ol.format.GeoJSON();
var features_Julagpkg_11 = format_Julagpkg_11.readFeatures(json_Julagpkg_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Julagpkg_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Julagpkg_11.addFeatures(features_Julagpkg_11);
var lyr_Julagpkg_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Julagpkg_11, 
                style: style_Julagpkg_11,
                popuplayertitle: 'Jula.gpkg',
                interactive: true,
                title: '<img src="styles/legend/Julagpkg_11.png" /> Jula.gpkg'
            });
var format_CastoramaStandardgpkg_12 = new ol.format.GeoJSON();
var features_CastoramaStandardgpkg_12 = format_CastoramaStandardgpkg_12.readFeatures(json_CastoramaStandardgpkg_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastoramaStandardgpkg_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastoramaStandardgpkg_12.addFeatures(features_CastoramaStandardgpkg_12);
var lyr_CastoramaStandardgpkg_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CastoramaStandardgpkg_12, 
                style: style_CastoramaStandardgpkg_12,
                popuplayertitle: 'Castorama Standard.gpkg',
                interactive: true,
                title: '<img src="styles/legend/CastoramaStandardgpkg_12.png" /> Castorama Standard.gpkg'
            });
var format_CastoramaSmartgpkg_13 = new ol.format.GeoJSON();
var features_CastoramaSmartgpkg_13 = format_CastoramaSmartgpkg_13.readFeatures(json_CastoramaSmartgpkg_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastoramaSmartgpkg_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastoramaSmartgpkg_13.addFeatures(features_CastoramaSmartgpkg_13);
var lyr_CastoramaSmartgpkg_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CastoramaSmartgpkg_13, 
                style: style_CastoramaSmartgpkg_13,
                popuplayertitle: 'Castorama Smart.gpkg',
                interactive: true,
                title: '<img src="styles/legend/CastoramaSmartgpkg_13.png" /> Castorama Smart.gpkg'
            });
var format_Bricomangpkg_14 = new ol.format.GeoJSON();
var features_Bricomangpkg_14 = format_Bricomangpkg_14.readFeatures(json_Bricomangpkg_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bricomangpkg_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bricomangpkg_14.addFeatures(features_Bricomangpkg_14);
var lyr_Bricomangpkg_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bricomangpkg_14, 
                style: style_Bricomangpkg_14,
                popuplayertitle: 'Bricoman.gpkg',
                interactive: true,
                title: '<img src="styles/legend/Bricomangpkg_14.png" /> Bricoman.gpkg'
            });
var group_MapyPodkadowe = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: 'close',
                                title: 'Mapy Podkładowe'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Pszczki_1.setVisible(true);lyr_Hipper_2.setVisible(true);lyr_MerkuryMarket_3.setVisible(true);lyr_OBIgpkg_4.setVisible(true);lyr_MrwkaExpressgpkg_5.setVisible(true);lyr_Mrwka_Standard1mrwka_standard__mrwka_standard_6.setVisible(true);lyr_MrwkaMinimrwkimini__mrwka_mini_7.setVisible(true);lyr_SzopMarket_8.setVisible(true);lyr_Greinplast_9.setVisible(true);lyr_LeroyMerlingpkg_10.setVisible(true);lyr_Julagpkg_11.setVisible(true);lyr_CastoramaStandardgpkg_12.setVisible(true);lyr_CastoramaSmartgpkg_13.setVisible(true);lyr_Bricomangpkg_14.setVisible(true);
var layersList = [group_MapyPodkadowe,lyr_Pszczki_1,lyr_Hipper_2,lyr_MerkuryMarket_3,lyr_OBIgpkg_4,lyr_MrwkaExpressgpkg_5,lyr_Mrwka_Standard1mrwka_standard__mrwka_standard_6,lyr_MrwkaMinimrwkimini__mrwka_mini_7,lyr_SzopMarket_8,lyr_Greinplast_9,lyr_LeroyMerlingpkg_10,lyr_Julagpkg_11,lyr_CastoramaStandardgpkg_12,lyr_CastoramaSmartgpkg_13,lyr_Bricomangpkg_14];
lyr_Pszczki_1.set('fieldAliases', {'fid': 'fid', 'nazwa': 'nazwa', 'adres': 'adres', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Hipper_2.set('fieldAliases', {'fid': 'fid', 'nazwa': 'nazwa', 'adres': 'adres', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_MerkuryMarket_3.set('fieldAliases', {'fid': 'fid', 'nazwa': 'nazwa', 'Ades': 'Ades', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_OBIgpkg_4.set('fieldAliases', {'fid': 'fid', 'chain_name': 'chain_name', 'adres': 'adres', 'city': 'city', 'zip': 'zip', 'adres_1': 'adres_1', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_MrwkaExpressgpkg_5.set('fieldAliases', {'fid': 'fid', 'format': 'format', 'adres': 'adres', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Mrwka_Standard1mrwka_standard__mrwka_standard_6.set('fieldAliases', {'fid': 'fid', 'format': 'format', 'adres': 'adres', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'x1': 'x1', 'y1': 'y1', });
lyr_MrwkaMinimrwkimini__mrwka_mini_7.set('fieldAliases', {'fid': 'fid', 'Format': 'Format', 'Adress': 'Adress', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_SzopMarket_8.set('fieldAliases', {'fid': 'fid', 'nazwa': 'nazwa', 'adres': 'adres', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_Greinplast_9.set('fieldAliases', {'fid': 'fid', 'nazwa': 'nazwa', 'adres': 'adres', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_LeroyMerlingpkg_10.set('fieldAliases', {'fid': 'fid', 'Field1': 'Field1', 'Field2': 'Field2', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Julagpkg_11.set('fieldAliases', {'fid': 'fid', 'Field1': 'Field1', 'Field2': 'Field2', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_CastoramaStandardgpkg_12.set('fieldAliases', {'fid': 'fid', 'format': 'format', 'Adres': 'Adres', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_CastoramaSmartgpkg_13.set('fieldAliases', {'fid': 'fid', 'format': 'format', 'adres': 'adres', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_Bricomangpkg_14.set('fieldAliases', {'fid': 'fid', 'Field1': 'Field1', 'Field2': 'Field2', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'x': 'x', 'y': 'y', });
lyr_Pszczki_1.set('fieldImages', {'fid': '', 'nazwa': '', 'adres': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', });
lyr_Hipper_2.set('fieldImages', {'fid': '', 'nazwa': '', 'adres': '', 'field_3': '', 'field_4': '', 'field_5': '', 'field_6': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'y': '', });
lyr_MerkuryMarket_3.set('fieldImages', {'fid': '', 'nazwa': '', 'Ades': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'y': '', });
lyr_OBIgpkg_4.set('fieldImages', {'fid': '', 'chain_name': '', 'adres': '', 'city': '', 'zip': '', 'adres_1': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'y': '', });
lyr_MrwkaExpressgpkg_5.set('fieldImages', {'fid': 'TextEdit', 'format': 'TextEdit', 'adres': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_name': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Mrwka_Standard1mrwka_standard__mrwka_standard_6.set('fieldImages', {'fid': '', 'format': '', 'adres': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'x1': '', 'y1': '', });
lyr_MrwkaMinimrwkimini__mrwka_mini_7.set('fieldImages', {'fid': '', 'Format': '', 'Adress': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'y': '', });
lyr_SzopMarket_8.set('fieldImages', {'fid': '', 'nazwa': '', 'adres': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'y': '', });
lyr_Greinplast_9.set('fieldImages', {'fid': '', 'nazwa': '', 'adres': '', 'field_3': '', 'field_4': '', 'field_5': '', 'field_6': '', 'field_7': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'y': '', });
lyr_LeroyMerlingpkg_10.set('fieldImages', {'fid': '', 'Field1': '', 'Field2': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', });
lyr_Julagpkg_11.set('fieldImages', {'fid': '', 'Field1': '', 'Field2': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', });
lyr_CastoramaStandardgpkg_12.set('fieldImages', {'fid': '', 'format': '', 'Adres': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'y': '', });
lyr_CastoramaSmartgpkg_13.set('fieldImages', {'fid': 'TextEdit', 'format': 'TextEdit', 'adres': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_name': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Bricomangpkg_14.set('fieldImages', {'fid': '', 'Field1': '', 'Field2': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', 'x': '', 'y': '', });
lyr_Pszczki_1.set('fieldLabels', {'fid': 'no label', 'nazwa': 'no label', 'adres': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Hipper_2.set('fieldLabels', {'fid': 'no label', 'nazwa': 'no label', 'adres': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_MerkuryMarket_3.set('fieldLabels', {'fid': 'no label', 'nazwa': 'no label', 'Ades': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_OBIgpkg_4.set('fieldLabels', {'fid': 'no label', 'chain_name': 'no label', 'adres': 'no label', 'city': 'no label', 'zip': 'no label', 'adres_1': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_MrwkaExpressgpkg_5.set('fieldLabels', {'fid': 'no label', 'format': 'no label', 'adres': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Mrwka_Standard1mrwka_standard__mrwka_standard_6.set('fieldLabels', {'fid': 'no label', 'format': 'no label', 'adres': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'x1': 'no label', 'y1': 'no label', });
lyr_MrwkaMinimrwkimini__mrwka_mini_7.set('fieldLabels', {'fid': 'no label', 'Format': 'no label', 'Adress': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_SzopMarket_8.set('fieldLabels', {'fid': 'no label', 'nazwa': 'no label', 'adres': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Greinplast_9.set('fieldLabels', {'fid': 'no label', 'nazwa': 'no label', 'adres': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_LeroyMerlingpkg_10.set('fieldLabels', {'fid': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Julagpkg_11.set('fieldLabels', {'fid': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_CastoramaStandardgpkg_12.set('fieldLabels', {'fid': 'no label', 'format': 'no label', 'Adres': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_CastoramaSmartgpkg_13.set('fieldLabels', {'fid': 'no label', 'format': 'no label', 'adres': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Bricomangpkg_14.set('fieldLabels', {'fid': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Bricomangpkg_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});