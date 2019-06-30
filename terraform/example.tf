# provider "aws" {
#   profile    = "default"
#   region     = "us-east-1"
# }

# # New resource for the S3 bucket our application will use.
# resource "aws_s3_bucket" "example" {
#   # NOTE: S3 bucket names must be unique across _all_ AWS accounts, so
#   # this name must be changed before applying this example to avoid naming
#   # conflicts.
#   bucket = "terraform-getting-started-guide"
#   acl    = "private"
# }

# # Change the aws_instance we declared earlier to now include "depends_on"
# resource "aws_instance" "example" {
#   ami           = "ami-2757f631"
#   instance_type = "t2.micro"

#   # Tells Terraform that this EC2 instance must be created only after the
#   # S3 bucket has been created.
#   depends_on = [aws_s3_bucket.example]
# }

# resource "aws_eip" "ip" {
#   instance = aws_instance.example.id
# }
# resource "aws_instance" "example" {
#   ami           = "ami-b374d5a5"
#   instance_type = "t2.micro"

#   provisioner "local-exec" {
#     command = "echo ${aws_instance.example.public_ip} > ip_address.txt"
#   }
# }

# terraform {
#   required_version = "0.12.2"
# }

# provider "aws" {
#   region     = "us-east-1"
# }
# module "consul" {
#   source      = "hashicorp/consul/aws"
#   num_servers = "3"
# }

provider "google" {
  credentials = "${file("account.json")}"
  project= "carmenninja-3e675"
  region  = "us-central1"
  zone    = "us-central1-c"
}


resource "google_project" "pair_dev" {
  name = "Pair Dev"
  project_id = "pair-dev"
  org_id     = "1234567"
}