function qty_table_generator_sw_laterals(qty_bid_item) {

    var NN = 0; // bid item index

    while ( base_sov[NN].bid_item != qty_bid_item ) {
    
        NN++;
    }

    var unit_price = base_sov[NN].unit_price;

    var latest_pp = latest_pp_no(base_sov);

    var return_block = 
        
                 '<thead class="qty_thead">\
                    <tr class="qty_tr">\
                        <th class="qty_thead" rowspan="2" style="text-align:left; padding:5px">Address / Location</th>\
                        <th class="qty_thead" rowspan="2" style="text-align:center; padding:5px; width:13vw;">Asset ID</th>\
                        <th class="qty_thead" rowspan="2" style="text-align:center; padding:5px; width:13vw">Block Lot</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">Total</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">SFPW - ESH</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">SFPUC - SW</th>\
                    </tr>\
                    <tr class="qty_tr">\
                        <td class="qty_tdh">QTY</td>\
                        <td class="qty_tdh">AMT</td>\
                        <td class="qty_tdh">QTY</td>\
                        <td class="qty_tdh">AMT</td>\
                        <td class="qty_tdh">QTY</td>\
                        <td class="qty_tdh">AMT</td>\
                    </tr>\
                  </thead>';


    var dd = 0;
    var pp = 0;
    var ff = 0;

    var is_qty_in_pp = false;
    var payment_block = '';

    var lateral_extracted_details = [];
    var lateral_coordinates = [];
    var lateral_properties = [];

 //   var culvert_extracted_details = [];
 //   var culvert_coordinates = [];
 //   var culvert_properties = [];

    var period_totals = [];
    var to_date_totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (pp = 1; pp < latest_pp; pp++)

    {

        is_qty_in_pp = false;
        payment_block = '';
        period_totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (const lateral of json_1164I_101_sewer_lines_0.features)

        {

            lateral_properties = lateral.properties;   
            lateral_coordinates = lateral.geometry.coordinates;
            lateral_extracted_details = ['', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


            if (lateral_properties.pp_history.hasOwnProperty(qty_bid_item))

            {


                if (lateral_properties.pp_history[qty_bid_item].hasOwnProperty('PP' + zeroPad(pp, 2)))


                {

                    is_qty_in_pp = true;

                    lateral_extracted_details[0] = lateral_properties.location;

                        
                    lateral_extracted_details[1] =
                    "<a href=\"..\\index.html#20/" + 
                    lateral_coordinates[0][0][1] +"/" + 
                    lateral_coordinates[0][0][0] +                     
                    "\" target=\"_blank\">" + lateral_properties.id_a;
 
                    lateral_extracted_details[2] = lateral_properties.id_b;
                    
                    
                    //if (qty_bid_item == 'SW-11')
                    
                    //{
                    
                    //lateral_extracted_details[2] = [lateral_properties.SUBMITTALS.TVI_PRE_CON.SUBMITTAL, 
                    //                                lateral_properties.SUBMITTALS.TVI_PRE_CON.VIDEO];

                    // } 
                     
                    // else if (qty_bid_item == 'SW-17')
                     
                    // {
                     
                                         
                    //  lateral_extracted_details[2] = [lateral_properties.SUBMITTALS.TVI_PST_CON.SUBMITTAL, 
                    //                                  lateral_properties.SUBMITTALS.TVI_PST_CON.VIDEO];
                     
                    // } 

                    for (ff = 0; ff < funds.length; ff++)

                    {


                        if (lateral_properties.pp_history[qty_bid_item]
                            ['PP' + zeroPad(pp, 2)].hasOwnProperty(funds[ff]))

                        {

                            lateral_extracted_details[2 * ff + 5] = lateral_properties.pp_history
                                [qty_bid_item]['PP' + zeroPad(pp, 2)]
                                [funds[ff]].QTY;

                            lateral_extracted_details[2 * ff + 6] =
                                lateral_extracted_details[2 * ff + 5] * unit_price;


                            lateral_extracted_details[3] += lateral_extracted_details[2 * ff + 5];
                            lateral_extracted_details[4] += lateral_extracted_details[2 * ff + 6];


                            period_totals[0] += lateral_extracted_details[2 * ff + 5];
                            period_totals[1] += lateral_extracted_details[2 * ff + 6];
                            period_totals[2 * ff + 2] += lateral_extracted_details[2 * ff + 5];
                            period_totals[2 * ff + 3] += lateral_extracted_details[2 * ff + 6];

                        }

                    }

                    payment_block +=

                        '<tr class="qty_tr">\
                        <td class="qty_td" style="text-align:left; padding:5px">' +
                        lateral_extracted_details[0] + '</td>\
                        <td class="qty_td" style="text-align:center; padding:5px">' +
                        lateral_extracted_details[1] + '</td>\
                        <td class="qty_td" style="text-align:center; padding:5px">' +
                        lateral_extracted_details[2] + '</td>\
                        <td class="qty_td" style="text-align:right; padding:5px">' +
                        qty_or_blank(lateral_extracted_details[3], base_sov[NN].unit) + '</td>\
                        <td class="qty_td funding_td_amt" style="text-padding:5px">' +
                        amount_or_blank(lateral_extracted_details[4]) + '</td>';


                    for (ff = 0; ff < funds.length; ff++)

                    {

                        payment_block +=

                            '<td class="qty_td" style="text-align:right; padding:5px">' +
                            qty_or_blank(lateral_extracted_details[2 * ff + 5], base_sov[NN].unit) + '</td>\
                                     <td class="qty_td funding_td_amt_' + funds[ff] + '" style="padding:5px">' +
                            amount_or_blank(lateral_extracted_details[2 * ff + 6]) + '</td>';
                            
                    }

                }

                payment_block += '</tr>';

            }

        }

        if (is_qty_in_pp)

        {




            return_block += '<tr class="qty_tr">\
                                          <td style="padding:5px"><strong>Payment Period ' + pp + '</strong></td>\
                                        </tr>' + payment_block +
                '<tr>\
                                           <td>\
                                           </td>\
                                           <td>\
                                           </td>\
                                           <td style="padding:5px; text-align:right">\
                                             <strong>PP ' + pp + ' Totals:</strong>\
                                           </td>\
                                           <td class="qty_td"\
                                               style="padding:5px; text-align:right; width:5vw">\
                                             <strong>' +
                qty_or_blank(period_totals[0], base_sov[NN].unit) +
                '</strong>\
                                           </td>\
                                           <td class="qty_td funding_td_amt"\
                                                style="padding:5px; width:8vw;">\
                                             <strong>' +
                amount_or_blank(period_totals[1]) +
                '</strong>\
                                           </td>';


            for (ff = 0; ff < funds.length; ff++)

            {

                return_block +=

                    '<td class="qty_td" style="text-align:right; width:5vw; padding:5px"><strong>' +
                    qty_or_blank(period_totals[2 * ff + 2], base_sov[NN].unit) + '</strong></td>\
                              <td class="qty_td funding_td_amt_' + funds[ff] +
                    '" style="padding:5px; width:8vw;"><strong>' +
                    amount_or_blank(period_totals[2 * ff + 3]) + '</strong></td>';

            }

            return_block += '</tr><tr><td  colspan="9">&nbsp;</td></tr>';

        }

          
          for (dd = 0; dd < period_totals.length; dd++) 
   
           {
   
             to_date_totals[dd] +=  period_totals[dd];
    
            }
 
 
    }
    
    return_block +=
    
        '<tr class="qty_tr">\
          <td colspan="9">&nbsp;</td>\
         </tr>\
         <tr class="qty_tr">\
          <td></td>\
          <td></td>\
          <td style="padding:5px; text-align:right"><strong>To Date Totals:</strong></td>\
          <td class="qty_td" style="padding:5px; text-align:right; width:5vw;">\
            <strong>' + qty_or_blank(to_date_totals[0], base_sov[NN].unit) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt" style="padding:5px; text-align:right; width:8vw;">\
            <strong>' + amount_or_blank(to_date_totals[1]) + '</strong>\
          </td>\
          <td class="qty_td" style="padding:5px; text-align:right; width:5vw;">\
            <strong>' + qty_or_blank(to_date_totals[2], base_sov[NN].unit) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt_SFPW-ESH" style="padding:5px; text-align:right; width:8vw;">\
            <strong>' + amount_or_blank(to_date_totals[3]) + '</strong>\
          </td>\
          <td class="qty_td" style="padding:5px; text-align:right; width:5vw;">\
            <strong>' + qty_or_blank(to_date_totals[4], base_sov[NN].unit) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt_SFPUC-SW" style="padding:5px; text-align:right; width:8vw;">\
            <strong>' + amount_or_blank(to_date_totals[5]) + '</strong>\
          </td>\
         </tr><br>';    


    return return_block

}
