from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:atharva@localhost/VE3"


app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

ma = Marshmallow(app)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    done = db.Column(db.Boolean, default=False)


class TaskSchema(ma.Schema):
    class Meta:
        fields = ("id", "title", "description", "done")


task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)


@app.route("/tasks", methods=["POST"])
def add_task():
    title = request.json["title"]
    description = request.json.get("description", "")
    new_task = Task(title=title, description=description)

    db.session.add(new_task)
    db.session.commit()

    return task_schema.jsonify(new_task)


@app.route("/tasks", methods=["GET"])
def get_tasks():
    all_tasks = Task.query.all()
    return tasks_schema.jsonify(all_tasks)


@app.route("/tasks/<int:id>", methods=["GET"])
def get_task(id):
    task = Task.query.get(id)
    return task_schema.jsonify(task)


@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    task = Task.query.get(id)

    title = request.json["title"]
    description = request.json.get("description", "")
    done = request.json.get("done", False)

    task.title = title
    task.description = description
    task.done = done

    db.session.commit()

    return task_schema.jsonify(task)


@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()

    return task_schema.jsonify(task)


if __name__ == "__main__":
    app.run(debug=True)
    app.run(host="0.0.0.0", port=5000)
