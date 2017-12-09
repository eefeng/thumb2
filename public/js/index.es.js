
class PraiseButton {

    constructor($ele, option) {

        this.init();

        this.$ele = $ele;
        this.clickNum = option.clickNum || this.DEFAULT.clickNum;

        this.bindEvents();
    }

    init() {
        this.setDefault();
    }

    setDefault() {
        this.DEFAULT = {
            clickNum: 0
        }
    }



    bindEvents() {
        this.$ele.click(() => {

            this.$ele.css('-webkit-filter', 'grayscale(0)');
            $('#animation').addClass('num');
            this.clickNum = window.add(this.clickNum);

            setTimeout(() => {
                $('#animation').removeClass('num');
            }, 1000);

            console.log(this.clickNum)

        });
    }


}

class Thumb extends PraiseButton {

    constructor($ele, options) {
        super($ele, options);

        this.maxClickNum = options.maxClickNum || this.DEFAULT.maxClickNum;
        this.timerSeconds = options.senconds || this.DEFAULT.timerSeconds

    }

    init() {
        this.setDefault();
        this.initTimer();
    }

    setDefault() {
        this.DEFAULT = {
            clickNum: 0,
            maxClickNum: 10,
            timerSeconds: 1
        }
    }

    bindEvents() {
        this.$ele.click(() => {

            if(this.timer === 0) {

                this.timerStart();

                if(this.clickNum < this.maxClickNum) {
                    this.$ele.css('-webkit-filter', 'grayscale(0)');
                    $('#animation').addClass('num');
                    this.clickNum = window.add(this.clickNum);

                    setTimeout(() => {
                        $('#animation').removeClass('num');
                    }, 1000);


                    axios.get('/index/update').then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })



                } else {
                    this.$ele.css('-webkit-filter', 'grayscale(1)');
                    this.clickNum = 0;
                }

                setTimeout(() => {
                    this.timerEnd();
                }, this.timerSeconds * 1000);

                console.log(this.clickNum)
            } else {
                alert('just wait a minute');

            }
        });
    }

    initTimer() {
        this.timer = 0;
    }

    timerStart() {
        this.timer = 1;
    }

    timerEnd() {
        this.timer = 0;
    }
}

export  default {PraiseButton, Thumb};