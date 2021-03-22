var link = "https://datacenter.taichung.gov.tw/Swagger/OpenData/2072c001-c06e-4276-bbf1-84f3b113c38c?limit=1000";

const getData = {
    data() {
        return {
            datas: ""
        }
    },
    mounted() {

        var xhr = new XMLHttpRequest();

        xhr.open("GET", link);

        xhr.send();

        xhr.onload = () => {

            var json = xhr.responseText;
            var obj = JSON.parse(json);
            this.datas = obj;

            console.log(obj);
        }
    }
};

Vue.createApp(getData).mount("#data");