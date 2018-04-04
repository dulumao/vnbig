;
(function (DH) {
    var Base64 = function (ele, callBack, width, height) {
        this.imgFile = ele.files[0]
        this.width = width || 207
        this.height = height || 150
        // 定义方法
        var pattern = /(\/jpg$)|(\/png$)|(\/jpeg$)|(\/gif$)|(\/bmp$)/
        if (util.isIE() && util.isIE() * 1 < 9) {
            this.ieBase64(this.imgFile.value, callBack, this.width, this.height)
            return
        }
        if (!pattern.test(this.imgFile.type)) {
            alert('请上传jpg/jpeg/png/gif/bmp格式的照片！')
            ele.focus()
        } else {
            // 添加显示图片的HTML元素
            // $(ele).append("<div class='img-item'><div id='"+this.id+"'><img src='' width='"+this.width+"' height='"+this.height+"'/></div><span class='delete-hook' onclick='deleteImg(this)'>删除</span></div>");

            // 兼容主流浏览器
            this.mainBase64(this.imgFile, callBack, this.width, this.height)
        }
    }

    Base64.prototype = {
        ieBase64: function (file, callBack, width, height) {
            var realPath,
                xmlHttp,
                xml_dom,
                tmpNode,
                imgBase64Data
            realPath = file// 获取文件的真实本地路径.
            xmlHttp = new ActiveXObject('MSXML2.XMLHTTP')
            xmlHttp.open('POST', realPath, false)
            xmlHttp.send('')
            xml_dom = new ActiveXObject('MSXML2.DOMDocument')
            tmpNode = xml_dom.createElement('tmpNode')
            tmpNode.dataType = 'bin.base64'
            tmpNode.nodeTypedValue = xmlHttp.responseBody
            imgBase64Data = 'data:image/bmp;base64,' + tmpNode.text.replace(/\n/g, '')
            callBack(imgBase64Data)
            // ele.innerHTML="<img src='"+imgBase64Data+"' width='"+width+"' height='"+height+"'/>"; //渲染图片
        },
        mainBase64: function (file, callBack, width, height) {
            var fileReader,
                imgData
            fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = function () {
                imgData = this.result // base64数据
                callBack(imgData)
                // ele.innerHTML = "<img src='"+imgData+"' width='"+width+"' height='"+height+"'/>"; //渲染图片
            }
        },
    }

    DH.Base64 = function (ele, callBack, width, height) {
        return new Base64(ele, callBack, width, height)
    }
}(DH))
