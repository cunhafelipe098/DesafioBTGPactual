import * as Yup from 'yup'
import  fs from 'fs';

class CreateDocumentController {
  async store (req, res) {    

    fs.writeFile("C:\\Pasta\\meuarquivo.txt", JSON.stringify(req.body), function(erro) {

      if(erro) {
          throw erro;
      }

      console.log("Arquivo salvo");
    }); 

    return res.status(200).json({ success: 'created file in ' })
  }
}

export default new CreateDocumentController()