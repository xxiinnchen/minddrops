import os

import boto3
from flask import Flask, jsonify, make_response, request

app = Flask(__name__)


dynamodb_client = boto3.client('dynamodb')

if os.environ.get('IS_OFFLINE'):
    dynamodb_client = boto3.client(
        'dynamodb', region_name='localhost', endpoint_url='http://localhost:8000'
    )


USERS_TABLE = os.environ['USERS_TABLE']


# @app.route('/whoami/<string:user_name>')
# def get_user(user_name):
#     result = dynamodb_client.get_item(
#         TableName=USERS_TABLE, Key={'username': {'S': user_name}}
#     )
#     item = result.get('Item')
#     if not item:
#         return jsonify({'error': 'Could not find user with provided "username"'}), 404

#     return jsonify(
#         {'username': item.get('username').get('S')}
#     )

@app.route('/whoami', methods=['GET'])
def create_user():
    # user_name = request.json.get('username')
    # if not user_name:
    #     return jsonify({'error': 'Please provide "username"'}), 400

    # dynamodb_client.put_item(
    #     TableName=USERS_TABLE, Item={'username': {'S': user_name}}
    # )

    return jsonify({'username': "xc459"})


@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error='Not found!'), 404)
