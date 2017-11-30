/**
 * Created by levone on 17/11/29.
 * test
 * Description
 */
'use strict';
$(function() {
  $('#example').DataTable({
    processing: true,
    serverSide: true,
    language: {
      url: 'public/template/datatables.net/js/dataTables.zh.lang',
    },
    ajax: {
      url: '/api/dataTable/test',
      data: function(d) {
        d.columns = null;
        d.order = null;
      },
    },
  });
  $('#addTest').on('click', function() {
    BootstrapDialog.show({
      title: 'Quick Example',
      message: $('<div></div>').append($('#dialogBody').html()),
      buttons: [{
        label: 'Button 1',
        title: 'Mouse over Button 1',
      }, {
        label: 'Button 2',
        // no title as it is optional
        cssClass: 'btn-primary',
        data: {
          js: 'btn-confirm',
          'user-id': '3',
        },
        action: function() {
          alert('Hi Orange!');
        },
      }, {
        icon: 'glyphicon glyphicon-ban-circle',
        label: 'Button 3',
        title: 'Mouse over Button 3',
        cssClass: 'btn-warning',
      }, {
        label: 'Close',
        action: function(dialogItself) {
          dialogItself.close();
        },
      }],
    });
  });
});