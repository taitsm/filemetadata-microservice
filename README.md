# File Metadata Microservice

This is a File Metadata Microservice built with Node.js and Express for freeCodeCamp.

## Endpoints

- `POST /api/fileanalyse`: Analyzes the uploaded file and returns its metadata.

### Example Usage

- `POST /api/fileanalyse` with a file upload

### Example Output

```json
{
  "name": "myfile.png",
  "type": "image/png",
  "size": 12345
}
