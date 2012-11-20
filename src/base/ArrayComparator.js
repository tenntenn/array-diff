define(
        'base/ArrayComparator',
        [
                'base/Point'
        ],
        function(Point) {

                /**
                 * Compare two arrays. 
                 * The paramters have tosatisfy array1.length <= array2.length,
                 * otherwise array1 and array2 will be swaped.
                 * @class ArrayComparator
                 * @constructor
                 * @param {Array} array1 shorter array
                 * @param {Array} array2 longer array
                 * @namespace base
                 */
                function ArrayComparator(array1, array2) {

                        // given arrays which satisfy a1.length <= a2.length
                        var a1, a2;

                        // length of arrays
                        var n, m;

                        // m - n
                        var delta; 

                        // assert
                        if (!Array.isArray(array1)) {
                                throw new Error("First parameter must be Array object.");
                        } else if (!Array.isArray(array2)) {
                                throw new Error("Second parameter must be Array object.");
                        }

                        // swap?
                        if (array1.length < array2.length) {
                                a1 = array1;
                                a2 = array2;
                        } else {
                                a1 = array2;
                                a2 = array1;
                        }

                        n = a1.length;
                        m = a2.length;
                        delta = m - n; 


                        /**
                         * @method snake
                         * @param {base.Point} xy X-Y coordinate
                         * @return {number} Y coordinate
                         */
                        function snake(xy, pre) {

                                // repeate while xy is on diagonal line.
                                while(xy.x < m && xy.y < n && a1[xy.x+1] === a2[xy.y+1]) {
                                        xy.x += 1;
                                        xy.y += 1;
                                }

                                if (pre.x >= 0 || pre.y >= 0) {
                                }

                                return xy.y;
                        }

                        /**
                         * @method compare
                         * @return sb.Diff
                         */
                        this.compare = function() {
                                var fp = [];
                                var offset = m + 1;
                                var p,k,y;
                                var pre = new Point(-1, -1); 
                                for (p = 0 ;; p++) {
                                        for (k = -p; k < delta; k++) {
                                                y = Math.max(fp[k-1 + offset] + 1, fp[k+1 + offset]);
                                                fp[k+offset] = snake(new Point(k, y), pre); 
                                        } 

                                        for (k = delta + p; k > delta; k--) {
                                                y = Math.max(fp[k-1+offset] + 1, fp[k+1+offset]);
                                                fp[k + offset] = snake(new Point(k, y), pre);
                                        }

                                        y = Math.max(fp[delta-1 + offset] + 1, fp[delta+1 + offset]);
                                        fp[delta + offset] = snake(new Point(k, y), pre);
                                        if (fp[delta + offset] === n) {
                                                break;
                                        }
                                }
                        };
                }

                return ArrayComparator;
        }
);
