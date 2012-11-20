define(
        'Point',
        [],
        function(){

                /**
                 * @class Point
                 * @private
                 */
                function Point(x, y) {

                        /**
                         * @property x
                         */
                        this.x = x || 0;

                        /**
                         * @property y
                         */
                        this.y = y || 0;
                }

                return Point;
        }
);
