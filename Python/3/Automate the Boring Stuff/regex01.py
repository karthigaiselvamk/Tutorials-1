import re


def numbers():
    phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
    
    mo = phoneNumRegex.search('My number is 415-555-4242.')
    print('Phone number found: ' + mo.group()) # Phone number found: 415-555-4242


    phoneNumRegex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
    mo = phoneNumRegex.search('My number is 415-555-4242.')
    print(mo.group(1)) # 415
    print(mo.group(2)) # 555-4242
    print(mo.group(0)) # 415-555-4242
    print(mo.groups()) # ('415', '555-4242')
    
    
def pipes():
    heroRegex = re.compile(r'Batman|Tina Fey')
    
    mo = heroRegex.search('Batman and Tina Fey')
    print(mo.group()) # Batman
    
    mo = heroRegex.search('Tina Fey and Batman')
    print(mo.group()) # Tina Fex
    
    batRegex = re.compile(r'Bat(man|mobile|copter|bat)')
    mo = batRegex.search('Batmobile lost a wheel')
    print(mo.group()) # Batmobile
    print(mo.group(1)) # mobile
    
    
def question_mark():
    batRegex = re.compile(r'Bat(wo)?man')
    
    mo = batRegex.search('The adventures of Batman')
    print(mo.group()) # Batman
    
    mo = batRegex.search('The adventures of Batwoman')
    print(mo.group()) # Batwoman
    
    
    phoneNumRegex = re.compile(r'(\d\d\d-)?\d\d\d-\d\d\d\d')
    
    mo = phoneNumRegex.search('My number is 415-555-4242.')
    print(mo.group()) # 415-555-4242
    
    mo = phoneNumRegex.search('My number is 555-4242.')
    print(mo.group()) # 555-4242
    
    
def asterix():
    batRegex = re.compile(r'Bat(wo)*man')
    
    mo = batRegex.search('The Adventures of Batman')
    print(mo.group()) # Batman
    
    mo = batRegex.search('The Adventures of Batwoman')
    print(mo.group()) # Batwoman
    
    mo = batRegex.search('The Adventures of Batwowowowowoman')
    print(mo.group()) # Batwowowowowoman


def plus():
    batRegex = re.compile(r'Bat(wo)+man')
    
    mo = batRegex.search('The Adventures of Batwoman')
    print(mo.group()) # Batwoman
    
    mo = batRegex.search('The Adventures of Batwowowowowoman')
    print(mo.group()) # Batwowowowowoman
    
    mo = batRegex.search('The Adventures of Batman')
    print(mo == None) # None
    
    
def curly_brackets():
    haRegex = re.compile(r'(Ha){3}')
    
    mo = haRegex.search('HaHaHa')
    print(mo.group()) # HaHaHA
    
    mo = haRegex.search('Ha')
    print(mo == None) # True
    
    
def greedy_nongreedy():
    greedyHaRegex = re.compile(r'(Ha){3,5}')
    mo = greedyHaRegex.search('HaHaHaHaHa')
    print(mo.group()) # HaHaHaHaHa
    
    nongreedyHaRegex = re.compile(r'(Ha){3,5}?')
    mo = nongreedyHaRegex.search('HaHaHaHaHa')
    print(mo.group()) # HaHaha
    
    
def findall_method():
    phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
    
    mo = phoneNumRegex.search('Cell: 415-555-9999 Work: 212-555-0000')
    print(mo.group()) # 415-555-9999
    
    mo = phoneNumRegex.findall('Cell: 415-555-9999 Work: 212-555-0000')
    print(mo) # ['415-555-9999', '212-555-0000']
    
    
    phoneNumRegex = re.compile(r'(\d\d\d)-(\d\d\d)-(\d\d\d\d)')
    mo = phoneNumRegex.findall('Cell: 415-555-9999 Work: 212-555-0000')
    print(mo) # [('415', '555', '9999'), ('212', '555', '0000')]
    
    
def list_regex():
    xmasRegex = re.compile(r'\d+\s\w+')
    mo = xmasRegex.findall('12 drummers, 11 pipers, 10 lords, 9 ladies, ' +
        '8 maids, 7 swans, 6 geese, 5 rings, 4 birds, 3 hens, 2 doves, ' +
        '1 partridge')
    print(mo) # ['12 drummers', '11 pipers', '10 lords', '9 ...]
    
    
def characters():
    vowelRegex = re.compile(r'[aeiouAEIOU]')
    mo = vowelRegex.findall('RoboCop eats baby food. BABY FOOD.')
    print(mo) # ['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
    
    consonantRegex = re.compile(r'[^aeiouAEIOU]')
    mo = consonantRegex.findall('RoboCop eats baby food. BABY FOOD.')
    print(mo) # ['R', 'b', 'C', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ...]
        
        
print("numbers():")
numbers()
print("pipes():")
pipes()
print("question_mark():")
question_mark()
print("asterix():")
asterix()
print("plus():")
plus()
print("curly_brackets():")
curly_brackets()
print("greedy_nongreedy():")
greedy_nongreedy()
print("findall_method():")
findall_method()
print("list_regex():")
list_regex()
print("characters():")
characters()