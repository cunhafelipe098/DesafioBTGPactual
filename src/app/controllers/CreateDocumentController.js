import * as Yup from 'yup'
import  fs from 'fs';

class CreateDocumentController {
  async store (req, res) {    

    fs.writeFile("C:\\file.txt", JSON.stringify(req.body) ,function(erro) {

      if(erro) {
          throw erro;
      }
    });

    return res.status(200).json({ success: 'created file in C:\\file.txt' })
  }
}

export default new CreateDocumentController()