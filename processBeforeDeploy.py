# -*- coding: utf-8 -*-
"""
Created on Fri Oct  8 17:18:31 2021

@author: Admin
"""
import re
import os
import shutil
from mdutils.mdutils import MdUtils

patterns = {
    '[àáảãạăắằẵặẳâầấậẫẩ]': 'a',
    '[đ]': '',
    '[èéẻẽẹêềếểễệ]': 'e',
    '[ìíỉĩị]': 'i',
    '[òóỏõọôồốổỗộơờớởỡợ]': 'o',
    '[ùúủũụưừứửữự]': 'u',
    '[ỳýỷỹỵ]': 'y'
}


def convert(text):
    """
    Convert from 'Tieng Viet co dau' thanh 'Tieng Viet khong dau'
    text: input string to be converted
    Return: string converted
    """
    output = text
    for regex, replace in patterns.items():
        output = re.sub(regex, replace, output)
        # deal with upper case
        output = re.sub(regex.upper(), replace.upper(), output)
    return output


def convertToRule(text):
    text = text.lower().replace(" ", "-")
    return text


# process file replace id for hyperLink
def process_file(fileName, path):
    if not '.md' in fileName:
        return
    # read file and process content -> text
    fullPathReal = path+"/"+fileName
    f = open(fullPathReal, encoding='utf-8')
    text = f.read()
    
    arrString = []
    
    for i in range(len(text)):
        if text[i] == '(' and text[i + 1] == '#':
            strings = '(#'
            characters = ''
            idx = i + 2
            while characters != ')':
                characters = text[idx]
                strings += characters
                idx += 1
            arrString.append(strings)
    for x in arrString:
        textConvert = convertToRule(convert(x))
        text = text.replace(x, textConvert)
    # write to new file and write content
    fullPathClone = path+"/clone-"+fileName
    mdFile = MdUtils(file_name=fullPathClone)
    mdFile.write(text)
    mdFile.create_md_file()


# thuc hien xoa het file da clone va clone lai
def build_before_deploy(path):
    for filename in os.listdir(path):
        fullPath = os.path.join(path, filename)
        if os.path.isdir(fullPath):
            build_before_deploy(fullPath)
        else:
            if 'clone-' in filename:
                pathRemove = os.path.join(path, filename)
                os.remove(pathRemove)
            else:
                process_file(filename, path)
    return


if __name__ == '__main__':
    build_before_deploy(os.getcwd())


