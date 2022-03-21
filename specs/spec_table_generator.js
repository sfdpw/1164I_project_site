function spec_table()

{

    var div_list_desc = {

        '00': 'Addenda, Procurement and Contracting Requirements',
        '01': 'General Requirements',
        '02': 'Existing Conditions',
        '03': 'Concrete',
        '31': 'Earthwork',
        '32': 'Exterior Improvements',
        '33': 'Utilities',
        '34': 'Transportation'

    };


    var active_div_list = [];

    for (ii = 0; ii < list_of_specs.length; ii++) {

        if (active_div_list.includes(list_of_specs[ii].substring(6, 8)) == false) {

            active_div_list.push(list_of_specs[ii].substring(6, 8));

        }


    }


    var return_block = '<div id="accordion">';


    for (ii = 0; ii < active_div_list.length; ii++) {

         return_block +=

         '<div style="font-size: small" class="card">\
            <div class="card-header spec_card_header" id="heading_' + active_div_list[ii] + '">\
              <a class="mb-0">\
                <button style="font-size: small" class="btn btn-link"\
                        data-toggle="collapse"\
                        data-target="#collapse_' + active_div_list[ii] + '"\
                        aria-expanded="flase"\
                        aria-controls="collapse_' + active_div_list[ii] + '">\
                        <strong>' + active_div_list[ii] + ' - ' + div_list_desc[active_div_list[ii]] + '</strong>\
                </button>\
              </a>\
            </div>\
            <div id="collapse_' + active_div_list[ii] + '"\
                 class="collapse"\
                 aria-labelledby="heading_' + active_div_list[ii] + '"\
                 data-parent="#accordion">\
              <div style="max-height:140pt; overflow-y:scroll" class="card-body">';

        for (var jj = 0; jj < list_of_specs.length; jj++) {

            if (list_of_specs[jj].substring(6, 8) == active_div_list[ii]) {

                return_block += '<a href="' + list_of_specs[jj] + '" target="_blank">' +
                    ((list_of_specs[jj].replace(".pdf", "")).replace('1164I_','')).replace(/_/g,' ') + '</a><br>';

            }

        }

        return_block +=

            '</div>\
           </div>\
         </div>';

    }


    return_block +=

        '<div style="font-size: small" class="card">\
            <div class="card-header spec_card_header" id="heading_' + 'SPEC_GEN' + '">\
              <a class="mb-0">\
                <button style="font-size: small" class="btn btn-link"\
                        data-toggle="collapse"\
                        data-target="#collapse_' + 'SPEC_GEN' + '"\
                        aria-expanded="flase"\
                        aria-controls="collapse_' + 'SPEC_GEN' + '">\
                        <strong>' + 'City Standards, Orders and Misc.' + '</strong>\
                </button>\
              </a>\
            </div>\
            <div id="collapse_' + 'SPEC_GEN' + '"\
                 class="collapse"\
                 aria-labelledby="heading_' + 'SPEC_GEN' + '"\
                 data-parent="#accordion">\
              <div style="max-height:140pt; overflow-y:scroll" class="card-body">\
                <a href=\"./1164I_Project_Manual_Vol_1_of_2.pdf\" target=\"_blank\">Project Specification Manual - Volume 1</a><br>\
                <a href=\"./1164I_Project_Manual_Vol_2_of_2.pdf\" target=\"_blank\">Project Specification Manual - Volume 2</a><br>\
                <a href=\"./1164I_Project_Manual_Complete_Conformed.pdf\" target=\"_blank\">Project Specification Manual - Complete, Conformed</a><br>\
                <a href=\"./SFPW_STD_SPECS_draft_as_of_2021_08_09.pdf\" target=\"_blank\">SFPW Engineering Standard Specifications</a><br>\
                <a href=\"https://sfpublicworks.org/sites/default/files/PW-Order-187005-Signed.pdf\" target=\"_blank\">SFPW Excavation Order 187,005</a>\
             </div>\
           </div>\
         </div>';


    return_block += '</div>';




    return return_block


}
