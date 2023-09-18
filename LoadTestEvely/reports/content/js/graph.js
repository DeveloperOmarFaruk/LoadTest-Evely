/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 495.0, "minX": 0.0, "maxY": 46762.0, "series": [{"data": [[0.0, 495.0], [0.1, 495.0], [0.2, 495.0], [0.3, 559.0], [0.4, 559.0], [0.5, 559.0], [0.6, 579.0], [0.7, 579.0], [0.8, 579.0], [0.9, 711.0], [1.0, 711.0], [1.1, 711.0], [1.2, 745.0], [1.3, 745.0], [1.4, 745.0], [1.5, 805.0], [1.6, 805.0], [1.7, 805.0], [1.8, 919.0], [1.9, 919.0], [2.0, 1091.0], [2.1, 1091.0], [2.2, 1091.0], [2.3, 1248.0], [2.4, 1248.0], [2.5, 1248.0], [2.6, 1345.0], [2.7, 1345.0], [2.8, 1345.0], [2.9, 1381.0], [3.0, 1381.0], [3.1, 1381.0], [3.2, 1536.0], [3.3, 1536.0], [3.4, 1536.0], [3.5, 1572.0], [3.6, 1572.0], [3.7, 1572.0], [3.8, 1572.0], [3.9, 1572.0], [4.0, 1760.0], [4.1, 1760.0], [4.2, 1760.0], [4.3, 1802.0], [4.4, 1802.0], [4.5, 1802.0], [4.6, 1974.0], [4.7, 1974.0], [4.8, 1974.0], [4.9, 2180.0], [5.0, 2180.0], [5.1, 2180.0], [5.2, 2228.0], [5.3, 2228.0], [5.4, 2228.0], [5.5, 2248.0], [5.6, 2248.0], [5.7, 2248.0], [5.8, 2249.0], [5.9, 2249.0], [6.0, 2499.0], [6.1, 2499.0], [6.2, 2499.0], [6.3, 2601.0], [6.4, 2601.0], [6.5, 2601.0], [6.6, 2809.0], [6.7, 2809.0], [6.8, 2809.0], [6.9, 2820.0], [7.0, 2820.0], [7.1, 2820.0], [7.2, 3123.0], [7.3, 3123.0], [7.4, 3123.0], [7.5, 3191.0], [7.6, 3191.0], [7.7, 3191.0], [7.8, 3210.0], [7.9, 3210.0], [8.0, 3222.0], [8.1, 3222.0], [8.2, 3222.0], [8.3, 3334.0], [8.4, 3334.0], [8.5, 3334.0], [8.6, 3464.0], [8.7, 3464.0], [8.8, 3464.0], [8.9, 3485.0], [9.0, 3485.0], [9.1, 3485.0], [9.2, 3527.0], [9.3, 3527.0], [9.4, 3527.0], [9.5, 3538.0], [9.6, 3538.0], [9.7, 3538.0], [9.8, 3690.0], [9.9, 3690.0], [10.0, 3690.0], [10.1, 3727.0], [10.2, 3727.0], [10.3, 3896.0], [10.4, 3896.0], [10.5, 3896.0], [10.6, 3917.0], [10.7, 3917.0], [10.8, 3917.0], [10.9, 4000.0], [11.0, 4000.0], [11.1, 4000.0], [11.2, 4257.0], [11.3, 4257.0], [11.4, 4257.0], [11.5, 4340.0], [11.6, 4340.0], [11.7, 4340.0], [11.8, 4429.0], [11.9, 4429.0], [12.0, 4429.0], [12.1, 4462.0], [12.2, 4462.0], [12.3, 4479.0], [12.4, 4479.0], [12.5, 4479.0], [12.6, 4568.0], [12.7, 4568.0], [12.8, 4568.0], [12.9, 4609.0], [13.0, 4609.0], [13.1, 4609.0], [13.2, 4623.0], [13.3, 4623.0], [13.4, 4623.0], [13.5, 4663.0], [13.6, 4663.0], [13.7, 4663.0], [13.8, 4719.0], [13.9, 4719.0], [14.0, 4719.0], [14.1, 4727.0], [14.2, 4727.0], [14.3, 4944.0], [14.4, 4944.0], [14.5, 4944.0], [14.6, 4985.0], [14.7, 4985.0], [14.8, 4985.0], [14.9, 5051.0], [15.0, 5051.0], [15.1, 5051.0], [15.2, 5105.0], [15.3, 5105.0], [15.4, 5105.0], [15.5, 5117.0], [15.6, 5117.0], [15.7, 5117.0], [15.8, 5372.0], [15.9, 5372.0], [16.0, 5372.0], [16.1, 5472.0], [16.2, 5472.0], [16.3, 5671.0], [16.4, 5671.0], [16.5, 5671.0], [16.6, 5744.0], [16.7, 5744.0], [16.8, 5744.0], [16.9, 5763.0], [17.0, 5763.0], [17.1, 5763.0], [17.2, 5771.0], [17.3, 5771.0], [17.4, 5771.0], [17.5, 5826.0], [17.6, 5826.0], [17.7, 5826.0], [17.8, 5862.0], [17.9, 5862.0], [18.0, 5862.0], [18.1, 5944.0], [18.2, 5944.0], [18.3, 6004.0], [18.4, 6004.0], [18.5, 6004.0], [18.6, 6025.0], [18.7, 6025.0], [18.8, 6025.0], [18.9, 6028.0], [19.0, 6028.0], [19.1, 6028.0], [19.2, 6052.0], [19.3, 6052.0], [19.4, 6052.0], [19.5, 6233.0], [19.6, 6233.0], [19.7, 6233.0], [19.8, 6238.0], [19.9, 6238.0], [20.0, 6238.0], [20.1, 6281.0], [20.2, 6281.0], [20.3, 6286.0], [20.4, 6286.0], [20.5, 6286.0], [20.6, 6323.0], [20.7, 6323.0], [20.8, 6323.0], [20.9, 6335.0], [21.0, 6335.0], [21.1, 6335.0], [21.2, 6357.0], [21.3, 6357.0], [21.4, 6357.0], [21.5, 6361.0], [21.6, 6361.0], [21.7, 6361.0], [21.8, 6468.0], [21.9, 6468.0], [22.0, 6518.0], [22.1, 6518.0], [22.2, 6518.0], [22.3, 6532.0], [22.4, 6532.0], [22.5, 6532.0], [22.6, 6539.0], [22.7, 6539.0], [22.8, 6539.0], [22.9, 6594.0], [23.0, 6594.0], [23.1, 6594.0], [23.2, 6713.0], [23.3, 6713.0], [23.4, 6713.0], [23.5, 6714.0], [23.6, 6714.0], [23.7, 6714.0], [23.8, 6731.0], [23.9, 6731.0], [24.0, 6733.0], [24.1, 6733.0], [24.2, 6733.0], [24.3, 6745.0], [24.4, 6745.0], [24.5, 6745.0], [24.6, 6762.0], [24.7, 6762.0], [24.8, 6762.0], [24.9, 6800.0], [25.0, 6800.0], [25.1, 6800.0], [25.2, 6813.0], [25.3, 6813.0], [25.4, 6813.0], [25.5, 6813.0], [25.6, 6813.0], [25.7, 6813.0], [25.8, 6820.0], [25.9, 6820.0], [26.0, 6823.0], [26.1, 6823.0], [26.2, 6823.0], [26.3, 6880.0], [26.4, 6880.0], [26.5, 6880.0], [26.6, 6923.0], [26.7, 6923.0], [26.8, 6923.0], [26.9, 6938.0], [27.0, 6938.0], [27.1, 6938.0], [27.2, 6956.0], [27.3, 6956.0], [27.4, 6956.0], [27.5, 6958.0], [27.6, 6958.0], [27.7, 6958.0], [27.8, 6995.0], [27.9, 6995.0], [28.0, 6997.0], [28.1, 6997.0], [28.2, 6997.0], [28.3, 7051.0], [28.4, 7051.0], [28.5, 7051.0], [28.6, 7070.0], [28.7, 7070.0], [28.8, 7070.0], [28.9, 7078.0], [29.0, 7078.0], [29.1, 7078.0], [29.2, 7091.0], [29.3, 7091.0], [29.4, 7091.0], [29.5, 7108.0], [29.6, 7108.0], [29.7, 7108.0], [29.8, 7167.0], [29.9, 7167.0], [30.0, 7177.0], [30.1, 7177.0], [30.2, 7177.0], [30.3, 7179.0], [30.4, 7179.0], [30.5, 7179.0], [30.6, 7200.0], [30.7, 7200.0], [30.8, 7200.0], [30.9, 7239.0], [31.0, 7239.0], [31.1, 7239.0], [31.2, 7251.0], [31.3, 7251.0], [31.4, 7251.0], [31.5, 7253.0], [31.6, 7253.0], [31.7, 7253.0], [31.8, 7306.0], [31.9, 7306.0], [32.0, 7332.0], [32.1, 7332.0], [32.2, 7332.0], [32.3, 7358.0], [32.4, 7358.0], [32.5, 7358.0], [32.6, 7385.0], [32.7, 7385.0], [32.8, 7385.0], [32.9, 7395.0], [33.0, 7395.0], [33.1, 7395.0], [33.2, 7399.0], [33.3, 7399.0], [33.4, 7399.0], [33.5, 7400.0], [33.6, 7400.0], [33.7, 7400.0], [33.8, 7444.0], [33.9, 7444.0], [34.0, 7462.0], [34.1, 7462.0], [34.2, 7462.0], [34.3, 7474.0], [34.4, 7474.0], [34.5, 7474.0], [34.6, 7527.0], [34.7, 7527.0], [34.8, 7527.0], [34.9, 7528.0], [35.0, 7528.0], [35.1, 7528.0], [35.2, 7551.0], [35.3, 7551.0], [35.4, 7551.0], [35.5, 7567.0], [35.6, 7567.0], [35.7, 7567.0], [35.8, 7571.0], [35.9, 7571.0], [36.0, 7580.0], [36.1, 7580.0], [36.2, 7580.0], [36.3, 7589.0], [36.4, 7589.0], [36.5, 7589.0], [36.6, 7595.0], [36.7, 7595.0], [36.8, 7595.0], [36.9, 7607.0], [37.0, 7607.0], [37.1, 7607.0], [37.2, 7686.0], [37.3, 7686.0], [37.4, 7686.0], [37.5, 7726.0], [37.6, 7726.0], [37.7, 7726.0], [37.8, 7743.0], [37.9, 7743.0], [38.0, 7771.0], [38.1, 7771.0], [38.2, 7771.0], [38.3, 7777.0], [38.4, 7777.0], [38.5, 7777.0], [38.6, 7789.0], [38.7, 7789.0], [38.8, 7789.0], [38.9, 7791.0], [39.0, 7791.0], [39.1, 7791.0], [39.2, 7792.0], [39.3, 7792.0], [39.4, 7792.0], [39.5, 7799.0], [39.6, 7799.0], [39.7, 7799.0], [39.8, 7841.0], [39.9, 7841.0], [40.0, 7842.0], [40.1, 7842.0], [40.2, 7842.0], [40.3, 7846.0], [40.4, 7846.0], [40.5, 7846.0], [40.6, 7846.0], [40.7, 7846.0], [40.8, 7846.0], [40.9, 7865.0], [41.0, 7865.0], [41.1, 7865.0], [41.2, 7880.0], [41.3, 7880.0], [41.4, 7880.0], [41.5, 7987.0], [41.6, 7987.0], [41.7, 7987.0], [41.8, 7992.0], [41.9, 7992.0], [42.0, 8009.0], [42.1, 8009.0], [42.2, 8009.0], [42.3, 8028.0], [42.4, 8028.0], [42.5, 8028.0], [42.6, 8075.0], [42.7, 8075.0], [42.8, 8075.0], [42.9, 8153.0], [43.0, 8153.0], [43.1, 8153.0], [43.2, 8175.0], [43.3, 8175.0], [43.4, 8175.0], [43.5, 8187.0], [43.6, 8187.0], [43.7, 8187.0], [43.8, 8234.0], [43.9, 8234.0], [44.0, 8316.0], [44.1, 8316.0], [44.2, 8316.0], [44.3, 8331.0], [44.4, 8331.0], [44.5, 8331.0], [44.6, 8359.0], [44.7, 8359.0], [44.8, 8359.0], [44.9, 8371.0], [45.0, 8371.0], [45.1, 8371.0], [45.2, 8389.0], [45.3, 8389.0], [45.4, 8389.0], [45.5, 8434.0], [45.6, 8434.0], [45.7, 8434.0], [45.8, 8439.0], [45.9, 8439.0], [46.0, 8461.0], [46.1, 8461.0], [46.2, 8461.0], [46.3, 8469.0], [46.4, 8469.0], [46.5, 8469.0], [46.6, 8470.0], [46.7, 8470.0], [46.8, 8470.0], [46.9, 8485.0], [47.0, 8485.0], [47.1, 8485.0], [47.2, 8494.0], [47.3, 8494.0], [47.4, 8494.0], [47.5, 8494.0], [47.6, 8494.0], [47.7, 8494.0], [47.8, 8539.0], [47.9, 8539.0], [48.0, 8540.0], [48.1, 8540.0], [48.2, 8540.0], [48.3, 8564.0], [48.4, 8564.0], [48.5, 8564.0], [48.6, 8585.0], [48.7, 8585.0], [48.8, 8585.0], [48.9, 8596.0], [49.0, 8596.0], [49.1, 8596.0], [49.2, 8603.0], [49.3, 8603.0], [49.4, 8603.0], [49.5, 8606.0], [49.6, 8606.0], [49.7, 8606.0], [49.8, 8612.0], [49.9, 8612.0], [50.0, 8648.0], [50.1, 8648.0], [50.2, 8648.0], [50.3, 8694.0], [50.4, 8694.0], [50.5, 8694.0], [50.6, 8705.0], [50.7, 8705.0], [50.8, 8705.0], [50.9, 8719.0], [51.0, 8719.0], [51.1, 8719.0], [51.2, 8724.0], [51.3, 8724.0], [51.4, 8724.0], [51.5, 8750.0], [51.6, 8750.0], [51.7, 8750.0], [51.8, 8757.0], [51.9, 8757.0], [52.0, 8771.0], [52.1, 8771.0], [52.2, 8771.0], [52.3, 8774.0], [52.4, 8774.0], [52.5, 8774.0], [52.6, 8776.0], [52.7, 8776.0], [52.8, 8776.0], [52.9, 8783.0], [53.0, 8783.0], [53.1, 8783.0], [53.2, 8808.0], [53.3, 8808.0], [53.4, 8808.0], [53.5, 8824.0], [53.6, 8824.0], [53.7, 8824.0], [53.8, 8829.0], [53.9, 8829.0], [54.0, 8832.0], [54.1, 8832.0], [54.2, 8832.0], [54.3, 8833.0], [54.4, 8833.0], [54.5, 8833.0], [54.6, 8835.0], [54.7, 8835.0], [54.8, 8835.0], [54.9, 8940.0], [55.0, 8940.0], [55.1, 8940.0], [55.2, 8940.0], [55.3, 8940.0], [55.4, 8940.0], [55.5, 8970.0], [55.6, 8970.0], [55.7, 8970.0], [55.8, 8992.0], [55.9, 8992.0], [56.0, 9004.0], [56.1, 9004.0], [56.2, 9004.0], [56.3, 9004.0], [56.4, 9004.0], [56.5, 9004.0], [56.6, 9026.0], [56.7, 9026.0], [56.8, 9026.0], [56.9, 9040.0], [57.0, 9040.0], [57.1, 9040.0], [57.2, 9062.0], [57.3, 9062.0], [57.4, 9062.0], [57.5, 9079.0], [57.6, 9079.0], [57.7, 9079.0], [57.8, 9088.0], [57.9, 9088.0], [58.0, 9120.0], [58.1, 9120.0], [58.2, 9120.0], [58.3, 9122.0], [58.4, 9122.0], [58.5, 9122.0], [58.6, 9133.0], [58.7, 9133.0], [58.8, 9133.0], [58.9, 9139.0], [59.0, 9139.0], [59.1, 9139.0], [59.2, 9207.0], [59.3, 9207.0], [59.4, 9207.0], [59.5, 9254.0], [59.6, 9254.0], [59.7, 9254.0], [59.8, 9257.0], [59.9, 9257.0], [60.0, 9258.0], [60.1, 9258.0], [60.2, 9258.0], [60.3, 9258.0], [60.4, 9258.0], [60.5, 9258.0], [60.6, 9300.0], [60.7, 9300.0], [60.8, 9300.0], [60.9, 9312.0], [61.0, 9312.0], [61.1, 9312.0], [61.2, 9321.0], [61.3, 9321.0], [61.4, 9321.0], [61.5, 9333.0], [61.6, 9333.0], [61.7, 9333.0], [61.8, 9335.0], [61.9, 9335.0], [62.0, 9373.0], [62.1, 9373.0], [62.2, 9373.0], [62.3, 9379.0], [62.4, 9379.0], [62.5, 9379.0], [62.6, 9400.0], [62.7, 9400.0], [62.8, 9400.0], [62.9, 9406.0], [63.0, 9406.0], [63.1, 9406.0], [63.2, 9426.0], [63.3, 9426.0], [63.4, 9426.0], [63.5, 9432.0], [63.6, 9432.0], [63.7, 9432.0], [63.8, 9457.0], [63.9, 9457.0], [64.0, 9470.0], [64.1, 9470.0], [64.2, 9470.0], [64.3, 9481.0], [64.4, 9481.0], [64.5, 9481.0], [64.6, 9500.0], [64.7, 9500.0], [64.8, 9500.0], [64.9, 9514.0], [65.0, 9514.0], [65.1, 9514.0], [65.2, 9516.0], [65.3, 9516.0], [65.4, 9516.0], [65.5, 9523.0], [65.6, 9523.0], [65.7, 9523.0], [65.8, 9531.0], [65.9, 9531.0], [66.0, 9532.0], [66.1, 9532.0], [66.2, 9532.0], [66.3, 9534.0], [66.4, 9534.0], [66.5, 9534.0], [66.6, 9538.0], [66.7, 9538.0], [66.8, 9538.0], [66.9, 9543.0], [67.0, 9543.0], [67.1, 9543.0], [67.2, 9565.0], [67.3, 9565.0], [67.4, 9565.0], [67.5, 9571.0], [67.6, 9571.0], [67.7, 9571.0], [67.8, 9577.0], [67.9, 9577.0], [68.0, 9681.0], [68.1, 9681.0], [68.2, 9681.0], [68.3, 9688.0], [68.4, 9688.0], [68.5, 9688.0], [68.6, 9693.0], [68.7, 9693.0], [68.8, 9693.0], [68.9, 9746.0], [69.0, 9746.0], [69.1, 9746.0], [69.2, 9800.0], [69.3, 9800.0], [69.4, 9800.0], [69.5, 9805.0], [69.6, 9805.0], [69.7, 9805.0], [69.8, 9805.0], [69.9, 9805.0], [70.0, 9853.0], [70.1, 9853.0], [70.2, 9853.0], [70.3, 9874.0], [70.4, 9874.0], [70.5, 9874.0], [70.6, 9924.0], [70.7, 9924.0], [70.8, 9924.0], [70.9, 9933.0], [71.0, 9933.0], [71.1, 9933.0], [71.2, 9968.0], [71.3, 9968.0], [71.4, 9968.0], [71.5, 9989.0], [71.6, 9989.0], [71.7, 9989.0], [71.8, 10074.0], [71.9, 10074.0], [72.0, 10088.0], [72.1, 10088.0], [72.2, 10088.0], [72.3, 10155.0], [72.4, 10155.0], [72.5, 10155.0], [72.6, 10179.0], [72.7, 10179.0], [72.8, 10179.0], [72.9, 10186.0], [73.0, 10186.0], [73.1, 10186.0], [73.2, 10196.0], [73.3, 10196.0], [73.4, 10196.0], [73.5, 10209.0], [73.6, 10209.0], [73.7, 10209.0], [73.8, 10265.0], [73.9, 10265.0], [74.0, 10265.0], [74.1, 10338.0], [74.2, 10338.0], [74.3, 10342.0], [74.4, 10342.0], [74.5, 10342.0], [74.6, 10343.0], [74.7, 10343.0], [74.8, 10343.0], [74.9, 10432.0], [75.0, 10432.0], [75.1, 10432.0], [75.2, 10448.0], [75.3, 10448.0], [75.4, 10448.0], [75.5, 10459.0], [75.6, 10459.0], [75.7, 10459.0], [75.8, 10510.0], [75.9, 10510.0], [76.0, 10510.0], [76.1, 10577.0], [76.2, 10577.0], [76.3, 10578.0], [76.4, 10578.0], [76.5, 10578.0], [76.6, 10594.0], [76.7, 10594.0], [76.8, 10594.0], [76.9, 10638.0], [77.0, 10638.0], [77.1, 10638.0], [77.2, 10644.0], [77.3, 10644.0], [77.4, 10644.0], [77.5, 10650.0], [77.6, 10650.0], [77.7, 10650.0], [77.8, 10661.0], [77.9, 10661.0], [78.0, 10661.0], [78.1, 10663.0], [78.2, 10663.0], [78.3, 10686.0], [78.4, 10686.0], [78.5, 10686.0], [78.6, 10761.0], [78.7, 10761.0], [78.8, 10761.0], [78.9, 10768.0], [79.0, 10768.0], [79.1, 10768.0], [79.2, 10774.0], [79.3, 10774.0], [79.4, 10774.0], [79.5, 10782.0], [79.6, 10782.0], [79.7, 10782.0], [79.8, 10811.0], [79.9, 10811.0], [80.0, 10811.0], [80.1, 10866.0], [80.2, 10866.0], [80.3, 10993.0], [80.4, 10993.0], [80.5, 10993.0], [80.6, 11042.0], [80.7, 11042.0], [80.8, 11042.0], [80.9, 11083.0], [81.0, 11083.0], [81.1, 11083.0], [81.2, 11084.0], [81.3, 11084.0], [81.4, 11084.0], [81.5, 11124.0], [81.6, 11124.0], [81.7, 11124.0], [81.8, 11186.0], [81.9, 11186.0], [82.0, 11186.0], [82.1, 11187.0], [82.2, 11187.0], [82.3, 11209.0], [82.4, 11209.0], [82.5, 11209.0], [82.6, 11307.0], [82.7, 11307.0], [82.8, 11307.0], [82.9, 11366.0], [83.0, 11366.0], [83.1, 11366.0], [83.2, 11437.0], [83.3, 11437.0], [83.4, 11437.0], [83.5, 11450.0], [83.6, 11450.0], [83.7, 11450.0], [83.8, 11568.0], [83.9, 11568.0], [84.0, 11568.0], [84.1, 11628.0], [84.2, 11628.0], [84.3, 11790.0], [84.4, 11790.0], [84.5, 11790.0], [84.6, 11855.0], [84.7, 11855.0], [84.8, 11855.0], [84.9, 11913.0], [85.0, 11913.0], [85.1, 11913.0], [85.2, 11939.0], [85.3, 11939.0], [85.4, 11939.0], [85.5, 11956.0], [85.6, 11956.0], [85.7, 11956.0], [85.8, 12055.0], [85.9, 12055.0], [86.0, 12055.0], [86.1, 12059.0], [86.2, 12059.0], [86.3, 12302.0], [86.4, 12302.0], [86.5, 12302.0], [86.6, 12310.0], [86.7, 12310.0], [86.8, 12310.0], [86.9, 12320.0], [87.0, 12320.0], [87.1, 12320.0], [87.2, 12330.0], [87.3, 12330.0], [87.4, 12330.0], [87.5, 12476.0], [87.6, 12476.0], [87.7, 12476.0], [87.8, 12729.0], [87.9, 12729.0], [88.0, 12729.0], [88.1, 12758.0], [88.2, 12758.0], [88.3, 12761.0], [88.4, 12761.0], [88.5, 12761.0], [88.6, 13001.0], [88.7, 13001.0], [88.8, 13001.0], [88.9, 13119.0], [89.0, 13119.0], [89.1, 13119.0], [89.2, 13185.0], [89.3, 13185.0], [89.4, 13185.0], [89.5, 13203.0], [89.6, 13203.0], [89.7, 13203.0], [89.8, 13223.0], [89.9, 13223.0], [90.0, 13223.0], [90.1, 13490.0], [90.2, 13490.0], [90.3, 13498.0], [90.4, 13498.0], [90.5, 13498.0], [90.6, 13597.0], [90.7, 13597.0], [90.8, 13597.0], [90.9, 13675.0], [91.0, 13675.0], [91.1, 13675.0], [91.2, 13784.0], [91.3, 13784.0], [91.4, 13784.0], [91.5, 13914.0], [91.6, 13914.0], [91.7, 13914.0], [91.8, 13962.0], [91.9, 13962.0], [92.0, 13962.0], [92.1, 13988.0], [92.2, 13988.0], [92.3, 14056.0], [92.4, 14056.0], [92.5, 14056.0], [92.6, 14059.0], [92.7, 14059.0], [92.8, 14059.0], [92.9, 14373.0], [93.0, 14373.0], [93.1, 14373.0], [93.2, 14577.0], [93.3, 14577.0], [93.4, 14577.0], [93.5, 14675.0], [93.6, 14675.0], [93.7, 14675.0], [93.8, 14728.0], [93.9, 14728.0], [94.0, 14728.0], [94.1, 14792.0], [94.2, 14792.0], [94.3, 14975.0], [94.4, 14975.0], [94.5, 14975.0], [94.6, 15230.0], [94.7, 15230.0], [94.8, 15230.0], [94.9, 15316.0], [95.0, 15316.0], [95.1, 15316.0], [95.2, 15533.0], [95.3, 15533.0], [95.4, 15533.0], [95.5, 15732.0], [95.6, 15732.0], [95.7, 15732.0], [95.8, 15854.0], [95.9, 15854.0], [96.0, 15854.0], [96.1, 15887.0], [96.2, 15887.0], [96.3, 16422.0], [96.4, 16422.0], [96.5, 16422.0], [96.6, 16518.0], [96.7, 16518.0], [96.8, 16518.0], [96.9, 17240.0], [97.0, 17240.0], [97.1, 17240.0], [97.2, 17710.0], [97.3, 17710.0], [97.4, 17710.0], [97.5, 18120.0], [97.6, 18120.0], [97.7, 18120.0], [97.8, 18251.0], [97.9, 18251.0], [98.0, 18251.0], [98.1, 18922.0], [98.2, 18922.0], [98.3, 20493.0], [98.4, 20493.0], [98.5, 20493.0], [98.6, 24839.0], [98.7, 24839.0], [98.8, 24839.0], [98.9, 29877.0], [99.0, 29877.0], [99.1, 29877.0], [99.2, 30936.0], [99.3, 30936.0], [99.4, 30936.0], [99.5, 32716.0], [99.6, 32716.0], [99.7, 32716.0], [99.8, 46762.0], [99.9, 46762.0], [100.0, 46762.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 12.0, "series": [{"data": [[46700.0, 1.0], [400.0, 1.0], [500.0, 2.0], [700.0, 2.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 1.0], [1200.0, 1.0], [1300.0, 2.0], [1500.0, 3.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [2100.0, 1.0], [2200.0, 3.0], [2400.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [3100.0, 2.0], [3200.0, 2.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 3.0], [4600.0, 3.0], [4500.0, 1.0], [4700.0, 2.0], [5100.0, 2.0], [5000.0, 1.0], [4900.0, 2.0], [5300.0, 1.0], [5600.0, 1.0], [5400.0, 1.0], [5700.0, 3.0], [5800.0, 2.0], [6000.0, 4.0], [5900.0, 1.0], [6200.0, 4.0], [6300.0, 4.0], [6500.0, 4.0], [6400.0, 1.0], [6700.0, 6.0], [6900.0, 6.0], [6800.0, 6.0], [7000.0, 4.0], [7100.0, 4.0], [7400.0, 4.0], [7300.0, 6.0], [7200.0, 4.0], [7500.0, 8.0], [7600.0, 2.0], [7800.0, 6.0], [7700.0, 8.0], [7900.0, 2.0], [8000.0, 3.0], [8100.0, 3.0], [8600.0, 5.0], [8500.0, 5.0], [8700.0, 9.0], [8200.0, 1.0], [8300.0, 5.0], [8400.0, 8.0], [8800.0, 6.0], [8900.0, 4.0], [9200.0, 5.0], [9000.0, 7.0], [9100.0, 4.0], [9500.0, 12.0], [9700.0, 1.0], [9600.0, 3.0], [9400.0, 7.0], [9300.0, 7.0], [10200.0, 2.0], [10100.0, 4.0], [9800.0, 5.0], [9900.0, 4.0], [10000.0, 2.0], [10700.0, 4.0], [10600.0, 6.0], [10300.0, 3.0], [10500.0, 4.0], [10400.0, 3.0], [11200.0, 1.0], [11100.0, 3.0], [10900.0, 1.0], [10800.0, 2.0], [11000.0, 3.0], [11600.0, 1.0], [11700.0, 1.0], [11300.0, 2.0], [11400.0, 2.0], [11500.0, 1.0], [12000.0, 2.0], [11800.0, 1.0], [11900.0, 3.0], [12300.0, 4.0], [12700.0, 3.0], [12400.0, 1.0], [13100.0, 2.0], [13200.0, 2.0], [13000.0, 1.0], [13600.0, 1.0], [13500.0, 1.0], [13400.0, 2.0], [13700.0, 1.0], [13900.0, 3.0], [14300.0, 1.0], [14000.0, 2.0], [14600.0, 1.0], [14700.0, 2.0], [14500.0, 1.0], [14900.0, 1.0], [15200.0, 1.0], [15300.0, 1.0], [15800.0, 2.0], [15500.0, 1.0], [15700.0, 1.0], [16500.0, 1.0], [17200.0, 1.0], [16400.0, 1.0], [17700.0, 1.0], [18100.0, 1.0], [18200.0, 1.0], [18900.0, 1.0], [20400.0, 1.0], [24800.0, 1.0], [29800.0, 1.0], [30900.0, 1.0], [32700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 46700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 339.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 339.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 22.367647058823533, "minX": 1.6950642E12, "maxY": 66.1843971631206, "series": [{"data": [[1.6950642E12, 66.1843971631206], [1.69506426E12, 22.367647058823533]], "isOverall": false, "label": "Thread  Evely", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69506426E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 579.0, "minX": 1.0, "maxY": 19599.0, "series": [{"data": [[2.0, 805.0], [3.0, 579.0], [4.0, 16082.5], [5.0, 1802.0], [6.0, 2601.0], [7.0, 3896.0], [8.0, 2499.0], [9.0, 1892.5], [10.0, 2248.0], [11.0, 3485.0], [12.0, 3228.5], [13.0, 1381.0], [14.0, 4000.0], [16.0, 3015.0], [17.0, 4479.0], [18.0, 5771.0], [19.0, 3191.0], [20.0, 2725.0], [21.0, 5565.5], [22.0, 3933.6666666666665], [23.0, 3791.5], [24.0, 5436.0], [25.0, 4746.0], [26.0, 4986.4], [27.0, 4719.0], [28.0, 6656.0], [29.0, 8331.0], [30.0, 6823.0], [31.0, 3538.0], [32.0, 6967.666666666667], [33.0, 3321.0], [35.0, 9547.0], [34.0, 9565.0], [37.0, 8333.5], [36.0, 6763.5], [39.0, 9004.0], [38.0, 6532.0], [41.0, 8215.0], [40.0, 5944.0], [43.0, 10286.333333333334], [42.0, 9882.0], [45.0, 7686.0], [44.0, 13119.0], [47.0, 19599.0], [46.0, 8606.0], [49.0, 7205.5], [48.0, 5826.0], [51.0, 9391.5], [50.0, 5372.0], [53.0, 7016.5], [52.0, 6938.0], [55.0, 4985.0], [54.0, 10594.0], [57.0, 7043.5], [56.0, 9543.0], [59.0, 8447.333333333332], [58.0, 11396.2], [61.0, 9851.833333333334], [60.0, 7967.0], [63.0, 8510.285714285714], [62.0, 10580.333333333334], [67.0, 9085.285714285714], [66.0, 10622.5], [65.0, 8970.666666666668], [64.0, 11753.5], [70.0, 9582.317073170729], [69.0, 10342.266666666668], [68.0, 11322.384615384615], [1.0, 671.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[57.67142857142861, 8847.07714285714]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 70.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 129.2, "minX": 1.6950642E12, "maxY": 835262.3166666667, "series": [{"data": [[1.6950642E12, 835262.3166666667], [1.69506426E12, 201595.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6950642E12, 535.8], [1.69506426E12, 129.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69506426E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 6067.558823529411, "minX": 1.6950642E12, "maxY": 9517.315602836878, "series": [{"data": [[1.6950642E12, 9517.315602836878], [1.69506426E12, 6067.558823529411]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69506426E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 276.9117647058824, "minX": 1.6950642E12, "maxY": 535.946808510638, "series": [{"data": [[1.6950642E12, 535.946808510638], [1.69506426E12, 276.9117647058824]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69506426E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 6.588235294117647, "minX": 1.6950642E12, "maxY": 161.96808510638283, "series": [{"data": [[1.6950642E12, 161.96808510638283], [1.69506426E12, 6.588235294117647]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69506426E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 495.0, "minX": 1.6950642E12, "maxY": 46762.0, "series": [{"data": [[1.6950642E12, 32716.0], [1.69506426E12, 46762.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6950642E12, 1248.0], [1.69506426E12, 495.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6950642E12, 13751.300000000001], [1.69506426E12, 10665.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6950642E12, 30057.030000000017], [1.69506426E12, 46762.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6950642E12, 8981.0], [1.69506426E12, 4723.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6950642E12, 15805.84999999999], [1.69506426E12, 13276.449999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69506426E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 559.0, "minX": 1.0, "maxY": 9611.0, "series": [{"data": [[2.0, 3374.5], [8.0, 9099.5], [9.0, 9139.0], [10.0, 6566.5], [11.0, 5140.5], [3.0, 7056.5], [12.0, 9611.0], [13.0, 8678.0], [4.0, 9492.5], [1.0, 559.0], [5.0, 8843.0], [6.0, 7891.5], [7.0, 9463.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 84.0, "minX": 1.0, "maxY": 520.5, "series": [{"data": [[2.0, 322.0], [8.0, 386.0], [9.0, 310.0], [10.0, 208.0], [11.0, 520.5], [3.0, 381.0], [12.0, 218.0], [13.0, 214.5], [4.0, 410.5], [1.0, 84.0], [5.0, 221.5], [6.0, 218.5], [7.0, 324.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6950642E12, "maxY": 5.416666666666667, "series": [{"data": [[1.6950642E12, 5.416666666666667], [1.69506426E12, 0.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69506426E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.6950642E12, "maxY": 4.7, "series": [{"data": [[1.6950642E12, 4.7], [1.69506426E12, 1.1333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69506426E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.6950642E12, "maxY": 4.7, "series": [{"data": [[1.6950642E12, 4.7], [1.69506426E12, 1.1333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69506426E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.6950642E12, "maxY": 4.7, "series": [{"data": [[1.6950642E12, 4.7], [1.69506426E12, 1.1333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69506426E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

